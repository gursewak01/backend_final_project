import {IsNotEmpty,IsString} from "class-validator";



export class CreateTutorialTagsDto{
    
@IsNotEmpty()
@IsString()
readonly tagId:string;

}
