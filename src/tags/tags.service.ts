import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {Tags} from './schema/tags.schema';
import { CreateTagsDto } from './dto/create-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class TagsService {
    constructor(
        @InjectModel(Tags.name)
        private tagsModel: mongoose.Model<Tags>
    ) {}

  async findAll(): Promise<Tags[]> {
const tags = await this.tagsModel.find();
        return tags;
    }

  async create(tags: CreateTagsDto,): Promise<string> {
const  res = await  this.tagsModel.create(tags);
        return "Successfully added !";
    }

    

  async findById(id: string): Promise<Tags> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const tags = await this.tagsModel.findById(id);

        if (!tags) {
            throw new NotFoundException('Not found !');
        }
        return tags;
    }

      

  async updateById(id: string, tags: UpdateTagsDto): Promise<Tags> {
        return await this.tagsModel.findByIdAndUpdate(id, tags, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.tagsModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
