import { Prop} from "@nestjs/mongoose";
import { Gender } from "../enum/gener.enum";
export default class UserEntity{

    @Prop()
    username:string

    @Prop()
    email:string

    @Prop()
    age:number

    @Prop()
    gender:Gender
}
