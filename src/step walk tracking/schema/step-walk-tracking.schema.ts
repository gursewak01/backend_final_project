import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



@Schema({
    collection:"step-walk-tracking",
    timestamps:true
})export class StepWalkTracking{
    




@Prop()
userId: string


@Prop()
date: string


@Prop()
stepsTaken: string

}
export const StepWalkTrackingSchema = SchemaFactory.createForClass(StepWalkTracking);
