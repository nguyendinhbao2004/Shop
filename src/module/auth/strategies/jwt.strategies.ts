import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { strategies } from "passport";


export class JwtStrategies extends PassportStrategy(Strategy) {
    constructor(private readonly authService : AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET ||'your_jwt_secret_key',
        });
    }

    async validate(payload:any){
        return { userId: payload.sub, email: payload.email, roleId: payload.roleId };
    }

}   