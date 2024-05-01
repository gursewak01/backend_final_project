import {IsNotEmpty,IsString,IsDate} from "class-validator";

export class CreateStepWalkTrackingDto{
    
@IsNotEmpty()
@IsString()
readonly userId:string;
@IsNotEmpty()
@IsDate()
readonly date:string;
@IsNotEmpty()
@IsString()
readonly stepsTaken:string;

}
