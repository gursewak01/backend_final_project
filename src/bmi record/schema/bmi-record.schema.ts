import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    collection:"bmi-record",
    timestamps:true
})export class BMIRecord{
    
@Prop()
userId: string


@Prop()
bmi: string


@Prop()
date: string

}
export const BMIRecordSchema = SchemaFactory.createForClass(BMIRecord);
