import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {Recommendation} from './schema/recommendation.schema';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class RecommendationService {
    constructor(
        @InjectModel(Recommendation.name)
        private recommendationModel: mongoose.Model<Recommendation>
    ) {}

  async findAll(): Promise<Recommendation[]> {
		const recommendation=  this.recommendationModel.aggregate([{$lookup :
		{from:"tutorial",localField:"tutorialid",foreignField:"_id",as:"tutorialid"}}]);
		console.log(this.recommendationModel.collection.name);

// "const recommendation = await this.recommendationModel.find();"}

        return recommendation;
    }

  async create(recommendation: CreateRecommendationDto,): Promise<string> {
const  res = await  this.recommendationModel.create(recommendation);
        return "Successfully added !";
    }

    

  async findById(id: string): Promise<Recommendation> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const recommendation = await this.recommendationModel.findById(id);

        if (!recommendation) {
            throw new NotFoundException('Not found !');
        }
        return recommendation;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.recommendationModel.find({
        $or:[{userId: { $regex: keyword, $options: 'i' } },
{tutorialId: { $regex: keyword, $options: 'i' } },
{date: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, recommendation: UpdateRecommendationDto): Promise<Recommendation> {
        return await this.recommendationModel.findByIdAndUpdate(id, recommendation, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<string> {
         await this.recommendationModel.findByIdAndDelete(id);
         return "Successfully Deleted !";
    }
}
