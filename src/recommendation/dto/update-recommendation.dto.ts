import { IsOptional,IsString} from "class-validator";



export class UpdateRecommendationDto{
    


@IsOptional()
@IsString()
readonly userId:string;
@IsOptional()
@IsString()
readonly tutorialId:string;
@IsOptional()
@IsString()
readonly date:string;

}
