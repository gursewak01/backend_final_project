import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



@Schema({
    collection:"tutorial",
    timestamps:true
})export class Tutorial{
    




@Prop()
title: string


@Prop()
description: string


@Prop()
videoUrl: string

}
export const TutorialSchema = SchemaFactory.createForClass(Tutorial);
