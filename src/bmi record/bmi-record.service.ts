import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {BMIRecord} from './schema/bmi-record.schema';
import { CreateBMIRecordDto } from './dto/create-bmi record.dto';
import { UpdateBMIRecordDto } from './dto/update-bmi record.dto';

@Injectable()
export class BMIRecordService {
    constructor(
        @InjectModel(BMIRecord.name)
        private bmirecordModel: mongoose.Model<BMIRecord>
    ) {}

  async findAll(): Promise<BMIRecord[]> {
const bmirecord = await this.bmirecordModel.find();
        return bmirecord;
    }

  async create(bmirecord: CreateBMIRecordDto,): Promise<string> {
const  res = await  this.bmirecordModel.create(bmirecord);
        return "Successfully added !";
    }

    async createAndFetchId(bmirecord: CreateBMIRecordDto): Promise<string> {
        const  res = await this.bmirecordModel.create(bmirecord);
        return res.id;
    }

  async findById(id: string): Promise<BMIRecord> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const bmirecord = await this.bmirecordModel.findById(id);

        if (!bmirecord) {
            throw new NotFoundException('Not found !');
        }
        return bmirecord;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.bmirecordModel.find({
        $or:[{userId: { $regex: keyword, $options: 'i' } },
{bmi: { $regex: keyword, $options: 'i' } },
{date: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, bmirecord: UpdateBMIRecordDto): Promise<BMIRecord> {
        return await this.bmirecordModel.findByIdAndUpdate(id, bmirecord, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.bmirecordModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
