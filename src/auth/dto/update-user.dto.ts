import { IsInt } from "class-validator";
import { IsEmail } from "class-validator";
import { IsString, IsOptional} from "class-validator";
import { Gender } from "../enum/gener.enum";
import { IsEnum } from "class-validator";

export class UpdateUserDto{
    
  @IsOptional()
  @IsString()
  readonly username:string

  @IsOptional()
  @IsEmail()
  readonly email:string

  @IsOptional()
  @IsInt()
  readonly age:number

  @IsOptional()
  @IsString()
  readonly gender:Gender

}
