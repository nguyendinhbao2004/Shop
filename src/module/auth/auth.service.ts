import { Inject, Injectable } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { Register } from './dto/register.dto';
import { IAuthService } from './interface/auth.interface';
import { LoginResponse } from './interface/login-response';
import { GenericRepository } from 'src/common/base-repository/repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Account } from '../account/entity/account.entity';
import { JwtPayload } from './interface/jwt-payload.interface';
import { error } from 'console';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private readonly accRepo: GenericRepository<Account>,
    
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: Register): Promise<Account> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const newAccount = this.accRepo.create({
      email: dto.email,
      passwordHash: hashedPassword,
      fullName: dto.fullName,
      isActive: true,
      roleId: 'bbd4af76-62da-f011-b8b3-701ab80386bc',
    } as Account);
    await this.accRepo.save(await newAccount);
    return newAccount;
  }
  async validateUser(email: string, password: string): Promise<Account | null> {
    const account = await this.accRepo.findOne({ where: { email } });
    if (!account) {
      throw new Error('email not found');
    }
    const isMatch = await bcrypt.compare(password, account.passwordHash);
    if (!isMatch) {
      throw new Error('invalid password');
    }
    return account;
  }
  async login(dto: LoginDto): Promise<LoginResponse> {
    const user = await this.validateUser(dto.email, dto.password);
    if(!user){
      throw new error('Invalid Email')
    }
    // In a real application, you would generate a JWT token here
    const payload: JwtPayload = {
      userId: user.id,
      email: user.email,
      roleId: user.roleId
    };
    return { access_token: this.jwtService.sign(payload) };
  }
}
