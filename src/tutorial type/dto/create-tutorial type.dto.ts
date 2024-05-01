import {IsNotEmpty,IsString} from "class-validator";



export class CreateTutorialTypeDto{
    
@IsNotEmpty()
@IsString()
readonly typeName:string;

}
