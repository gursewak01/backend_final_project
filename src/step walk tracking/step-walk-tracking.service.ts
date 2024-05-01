import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {StepWalkTracking} from './schema/step-walk-tracking.schema';
import { CreateStepWalkTrackingDto } from './dto/create-step walk tracking.dto';
import { UpdateStepWalkTrackingDto } from './dto/update-step walk tracking.dto';

@Injectable()
export class StepWalkTrackingService {
    constructor(
        @InjectModel(StepWalkTracking.name)
        private stepwalktrackingModel: mongoose.Model<StepWalkTracking>
    ) {}

  async findAll(): Promise<StepWalkTracking[]> {
const stepwalktracking = await this.stepwalktrackingModel.find();
        return stepwalktracking;
    }

  async create(stepwalktracking: CreateStepWalkTrackingDto,): Promise<string> {
const  res = await  this.stepwalktrackingModel.create(stepwalktracking);
        return "Successfully added !";
    }

    

  async findById(id: string): Promise<StepWalkTracking> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const stepwalktracking = await this.stepwalktrackingModel.findById(id);

        if (!stepwalktracking) {
            throw new NotFoundException('Not found !');
        }
        return stepwalktracking;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.stepwalktrackingModel.find({
        $or:[{userId: { $regex: keyword, $options: 'i' } },
{date: { $regex: keyword, $options: 'i' } },
{stepsTaken: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, stepwalktracking: UpdateStepWalkTrackingDto): Promise<StepWalkTracking> {
        return await this.stepwalktrackingModel.findByIdAndUpdate(id, stepwalktracking, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.stepwalktrackingModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
