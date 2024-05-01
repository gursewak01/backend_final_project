import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    collection:"tutorial-type",
    timestamps:true
})export class TutorialType{
    
@Prop()
typeName: string

}
export const TutorialTypeSchema = SchemaFactory.createForClass(TutorialType);
