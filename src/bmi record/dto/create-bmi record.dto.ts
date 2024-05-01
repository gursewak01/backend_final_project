import {IsNotEmpty,IsString,IsDate} from "class-validator";



export class CreateBMIRecordDto{
    


@IsNotEmpty()
@IsString()
readonly userId:string;
@IsNotEmpty()
@IsString()
readonly bmi:string;
@IsNotEmpty()
@IsDate()
readonly date:string;

}
