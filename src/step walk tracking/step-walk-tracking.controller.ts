import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StepWalkTrackingService } from './step-walk-tracking.service';
import { StepWalkTracking } from './schema/step-walk-tracking.schema';
import { UpdateStepWalkTrackingDto } from './dto/update-step walk tracking.dto';
import { CreateStepWalkTrackingDto } from './dto/create-step walk tracking.dto';
import { SearchDto } from './dto/keyword-search.dto';

@Controller('step-walk-tracking')
export class StepWalkTrackingController {
    constructor (private stepwalktrackingService:StepWalkTrackingService,){
    }

  @Get('all-step-walk-tracking')
@UseGuards(AuthGuard())
    async getAllStepWalkTracking():Promise<StepWalkTracking[]>{
        return this.stepwalktrackingService.findAll()
    }
   

  @Post('add-step-walk-tracking')
@UseGuards(AuthGuard())
async createStepWalkTracking(
        @Body()
        stepwalktracking:CreateStepWalkTrackingDto):Promise<string>{

    return this.stepwalktrackingService.create(stepwalktracking,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getStepWalkTracking(
        @Param('id') id:string
    ):Promise<StepWalkTracking>{
        return this.stepwalktrackingService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.stepwalktrackingService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateStepWalkTracking(
        @Param('id')
        id:string,
        @Body()
         stepwalktracking:UpdateStepWalkTrackingDto):Promise<StepWalkTracking>{
    return this.stepwalktrackingService.updateById(id,stepwalktracking);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteStepWalkTracking(
        @Param('id') id:string
    ):Promise<string>{
        return this.stepwalktrackingService.deleteById(id);
    }
}
