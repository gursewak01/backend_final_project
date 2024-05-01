import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RecommendationService } from './recommendation.service';
import { Recommendation } from './schema/recommendation.schema';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { SearchDto } from './dto/keyword-search.dto';

@Controller('recommendation')
export class RecommendationController {
    constructor (private recommendationService:RecommendationService,){
    }

  @Get('all-recommendation')
@UseGuards(AuthGuard())
    async getAllRecommendation():Promise<Recommendation[]>{
        return this.recommendationService.findAll()
    }
   

  @Post('add-recommendation')
@UseGuards(AuthGuard())
async createRecommendation(
        @Body()
        recommendation:CreateRecommendationDto):Promise<string>{

    return this.recommendationService.create(recommendation,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getRecommendation(
        @Param('id') id:string
    ):Promise<Recommendation>{
        return this.recommendationService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.recommendationService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateRecommendation(
        @Param('id')
        id:string,
        @Body()
         recommendation:UpdateRecommendationDto):Promise<Recommendation>{
    return this.recommendationService.updateById(id,recommendation);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteRecommendation(
        @Param('id') id:string
    ):Promise<string>{
        return this.recommendationService.deleteById(id);
    }
}
