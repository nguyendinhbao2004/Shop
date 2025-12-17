import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "../account/entity/account.entity";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategies } from "./strategies/jwt.strategies";
import { AccountModule } from "../account/account.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Account]),
        JwtModule.register({
            secret: 'secretkey',
            signOptions: {expiresIn: '1h'}
        }),
        AccountModule
    ],
    controllers:[AuthController,
        
    ],
    providers:[AuthService, JwtStrategies],
    exports:[AuthService]
})
export class AuthModule{}
