import { Account } from "src/module/account/entity/account.entity";
import { LoginDto } from "../dto/login.dto";
import { Register } from "../dto/register.dto";
import { LoginResponse } from "./login-response";


export interface IAuthService {
     /**
   * Đăng ký user mới
   * @param dto RegisterDto
   * @returns User đã lưu vào DB
   */
  register(dto: Register): Promise<Account>;

  /**
   * Xác thực user bằng email và password
   * @param email string
   * @param password string
   * @returns User nếu đúng credentials, throw UnauthorizedException nếu sai
   */
  validateUser(email: string, password: string): Promise<Account | null>;

  /**
   * Login, trả về JWT token
   * @param dto LoginDto
   * @returns LoginResponse chứa access_token
   */
  login(dto: LoginDto): Promise<LoginResponse>;
}