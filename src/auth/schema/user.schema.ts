import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "../enum/gener.enum";


@Schema({
 timestamps:true   
})

export class User {
    
    @Prop()
    username:string
    @Prop()
    password:string
    @Prop()
    email:string
    @Prop()
    age:number
    @Prop()
    gender:Gender
}

export const UserSchema = SchemaFactory.createForClass(User)
