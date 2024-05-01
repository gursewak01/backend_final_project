import { IsOptional,IsString} from "class-validator";



export class UpdateTutorialTypeDto{
    
@IsOptional()
@IsString()
readonly typeName:string;

}
