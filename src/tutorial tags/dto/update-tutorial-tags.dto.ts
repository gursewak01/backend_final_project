import { IsOptional,IsString} from "class-validator";



export class UpdateTutorialTagsDto{
    
@IsOptional()
@IsString()
readonly tagId:string;
}
