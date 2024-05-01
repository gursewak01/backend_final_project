import {IsNotEmpty,IsString} from "class-validator";



export class CreateRecommendationDto{
    


@IsNotEmpty()
@IsString()
readonly userId:string;
@IsNotEmpty()
@IsString()
readonly tutorialId:string;
@IsNotEmpty()
@IsString()
readonly date:string;

}
