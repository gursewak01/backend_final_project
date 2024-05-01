import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {TutorialTags} from './schema/tutorial-tags.schema';
import { CreateTutorialTagsDto } from './dto/create-tutorial tags.dto';
import { UpdateTutorialTagsDto } from './dto/update-tutorial-tags.dto';

@Injectable()
export class TutorialTagsService {
    constructor(
        @InjectModel(TutorialTags.name)
        private tutorialtagsModel: mongoose.Model<TutorialTags>
    ) {}

  async findAll(): Promise<TutorialTags[]> {
		const tutorialtags=  this.tutorialtagsModel.aggregate([{$lookup :
		{from:"tutorial tags",localField:"tagid",foreignField:"_id",as:"tagid"}}]);
		console.log(this.tutorialtagsModel.collection.name);

// "const tutorial tags = await this.tutorial tagsModel.find();"}

        return tutorialtags;
    }

  async create(tutorialtags: CreateTutorialTagsDto,): Promise<string> {
const  res = await  this.tutorialtagsModel.create(tutorialtags);
        return "Successfully added !";
    }

    async createAndFetchId(tutorialtags: CreateTutorialTagsDto): Promise<string> {
        const  res = await this.tutorialtagsModel.create(tutorialtags);
        return res.id;
    }

  async findById(id: string): Promise<TutorialTags> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const tutorialtags = await this.tutorialtagsModel.findById(id);

        if (!tutorialtags) {
            throw new NotFoundException('Not found !');
        }
        return tutorialtags;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.tutorialtagsModel.find({
        $or:[{tagId: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, tutorialtags: UpdateTutorialTagsDto): Promise<TutorialTags> {
        return await this.tutorialtagsModel.findByIdAndUpdate(id, tutorialtags, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.tutorialtagsModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
