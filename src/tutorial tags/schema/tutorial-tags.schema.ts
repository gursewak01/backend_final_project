import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


@Schema({
    collection:"tutorial-tags",
    timestamps:true
})export class TutorialTags{
    
@Prop({type: mongoose.Schema.Types.ObjectId, ref:TutorialTags.name} )
tagId: TutorialTags

}
export const TutorialTagsSchema = SchemaFactory.createForClass(TutorialTags);
