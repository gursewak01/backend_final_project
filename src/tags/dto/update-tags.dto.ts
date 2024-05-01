import { IsOptional,IsString} from "class-validator";



export class UpdateTagsDto{
    
@IsOptional()
@IsString()
readonly tagName:string;

}
