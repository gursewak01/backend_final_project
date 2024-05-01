import { IsOptional,IsString,IsDate} from "class-validator";

export class UpdateStepWalkTrackingDto{
    
@IsOptional()
@IsString()
readonly userId:string;
@IsOptional()
@IsDate()
readonly date:string;
@IsOptional()
@IsString()
readonly stepsTaken:string;

}
