import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Register } from "./dto/register.dto";
import { BaseResponse } from "src/common/base-response/base.response";
import { LoginDto } from "./dto/login.dto";


@ApiTags('Auth')
@Controller('auth')
export class AuthController{
    constructor(private readonly authService : AuthService){}

    @Post('register')
    async register(@Body() dto : Register){
        const register = await this.authService.register(dto);
        return BaseResponse.success(register, 'Register successfully')
            
    }

    @Post('login')
    async login(@Body() dto:LoginDto){
        const login = await this.authService.login(dto);
        return BaseResponse.success(login, 'Login successfully')
    }

}