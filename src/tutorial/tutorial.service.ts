import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {Tutorial} from './schema/tutorial.schema';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';

@Injectable()
export class TutorialService {
    constructor(
        @InjectModel(Tutorial.name)
        private tutorialModel: mongoose.Model<Tutorial>
    ) {}

  async findAll(): Promise<Tutorial[]> {
const tutorial = await this.tutorialModel.find();
        return tutorial;
    }

  async create(tutorial: CreateTutorialDto,): Promise<string> {
const  res = await  this.tutorialModel.create(tutorial);
        return "Successfully added !";
    }

    async createAndFetchId(tutorial: CreateTutorialDto): Promise<string> {
        const  res = await this.tutorialModel.create(tutorial);
        return res.id;
    }

  async findById(id: string): Promise<Tutorial> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const tutorial = await this.tutorialModel.findById(id);

        if (!tutorial) {
            throw new NotFoundException('Not found !');
        }
        return tutorial;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.tutorialModel.find({
        $or:[{title: { $regex: keyword, $options: 'i' } },
{description: { $regex: keyword, $options: 'i' } },
{videoUrl: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, tutorial: UpdateTutorialDto): Promise<Tutorial> {
        return await this.tutorialModel.findByIdAndUpdate(id, tutorial, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.tutorialModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
