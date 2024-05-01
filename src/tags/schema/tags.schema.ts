import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



@Schema({
    collection:"tags",
    timestamps:true
})export class Tags{
    


@Prop()
tagName: string

}
export const TagsSchema = SchemaFactory.createForClass(Tags);
