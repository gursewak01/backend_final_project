import { IsOptional,IsString,IsDate} from "class-validator";



export class UpdateBMIRecordDto{
    


@IsOptional()
@IsString()
readonly userId:string;
@IsOptional()
@IsString()
readonly bmi:string;
@IsOptional()
@IsDate()
readonly date:string;

}
