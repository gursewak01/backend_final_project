import {IsNotEmpty,IsString} from "class-validator";



export class CreateTagsDto{
    
@IsNotEmpty()
@IsString()
readonly tagName:string;

}
