import { IsNotEmpty, IsString} from "class-validator";

export class CreateMailDto{
    @IsNotEmpty()
    @IsString()
    readonly to:string;
    @IsNotEmpty()
    @IsString()
    readonly subject:string;  
    @IsNotEmpty()
    @IsString()
    readonly body:string;
}
