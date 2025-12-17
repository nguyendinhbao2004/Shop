import { Inject } from "@nestjs/common";
import { CreateAccountDto } from "../dto/create-account.dto";
import { UpdateAccountDto } from "../dto/update-account.dto";
import { Account } from "../entity/account.entity";
import { IAccountService } from "../interface/account.service.interface";
import { GenericRepository } from "src/common/base-repository/repository";


export class AccountService implements IAccountService{
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private readonly userRepository: GenericRepository<Account>,
    ){}
    findAllUsers(): Promise<Account[]> {
        throw new Error("Method not implemented.");
    }
    findUserById(id: number): Promise<Partial<Account> | null> {
        throw new Error("Method not implemented.");
    }
    createUser(data: CreateAccountDto): Promise<Account> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, data: Partial<UpdateAccountDto>): Promise<Account | null> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}