import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {TutorialType} from './schema/tutorial type.schema';
import { CreateTutorialTypeDto } from './dto/create-tutorial type.dto';
import { UpdateTutorialTypeDto } from './dto/update-tutorial type.dto';

@Injectable()
export class TutorialTypeService {
    constructor(
        @InjectModel(TutorialType.name)
        private tutorialtypeModel: mongoose.Model<TutorialType>
    ) {}

  async findAll(): Promise<TutorialType[]> {
const tutorialtype = await this.tutorialtypeModel.find();
        return tutorialtype;
    }

  async create(tutorialtype: CreateTutorialTypeDto,): Promise<string> {
const  res = await  this.tutorialtypeModel.create(tutorialtype);
        return "Successfully added !";
    }

    

  async findById(id: string): Promise<TutorialType> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const tutorialtype = await this.tutorialtypeModel.findById(id);

        if (!tutorialtype) {
            throw new NotFoundException('Not found !');
        }
        return tutorialtype;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.tutorialtypeModel.find({
        $or:[{typeName: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, tutorialtype: UpdateTutorialTypeDto): Promise<TutorialType> {
        return await this.tutorialtypeModel.findByIdAndUpdate(id, tutorialtype, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.tutorialtypeModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
