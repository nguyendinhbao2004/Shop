import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class LoginDto {
    @ApiProperty( { example: 'abc@gmail.com', description: 'User email' } )
    @IsString()
    @IsEmail()
    email:string;
    @ApiProperty( { example: 'password123', description: 'User password' } )

    @IsString()
    password:string;
}