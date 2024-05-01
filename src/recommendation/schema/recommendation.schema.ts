import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Tutorial } from "src/tutorial/schema/tutorial.schema";


@Schema({
    collection: "recommendation",
    timestamps: true
}) export class Recommendation {

    @Prop()
    userId: string


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tutorial.name })
    tutorialId: Tutorial


    @Prop()
    date: string

}
export const RecommendationSchema = SchemaFactory.createForClass(Recommendation);
