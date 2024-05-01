/* eslint-disable prettier/prettier */
import {IsNotEmpty,IsOptional, IsString,IsEmail,IsInt,IsEnum, MinLength} from "class-validator";
import { Gender } from "../enum/gener.enum";


export class SignUpDto{
    
    @IsNotEmpty()
    @IsString()
    readonly username:string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string;
    @IsNotEmpty()
    @IsEmail()
    readonly email:string;
    @IsNotEmpty()
    @IsInt()
    readonly age:number;
    @IsNotEmpty()
    @IsString()
    readonly gender:Gender;
}
