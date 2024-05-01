import { IsOptional,IsString} from "class-validator";



export class UpdateTutorialDto{
    


@IsOptional()
@IsString()
readonly title:string;
@IsOptional()
@IsString()
readonly description:string;
@IsOptional()
@IsString()
readonly videoUrl:string;

}
