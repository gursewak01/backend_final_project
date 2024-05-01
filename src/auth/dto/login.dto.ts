import {IsNotEmpty,IsString,IsEmail,MinLength} from "class-validator";
export class LoginDto{
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string;
    @IsNotEmpty()
    @IsEmail()
    readonly email:string;
}
