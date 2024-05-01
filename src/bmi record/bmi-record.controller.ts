import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BMIRecordService } from './bmi-record.service';
import { BMIRecord } from './schema/bmi-record.schema';
import { UpdateBMIRecordDto } from './dto/update-bmi record.dto';
import { CreateBMIRecordDto } from './dto/create-bmi record.dto';
import { SearchDto } from './dto/keyword-search.dto';

@Controller('bmi-record')
export class BMIRecordController {
    constructor (private bmirecordService:BMIRecordService,){
    }

  @Get('all-bmi-record')
@UseGuards(AuthGuard())
    async getAllBMIRecord():Promise<BMIRecord[]>{
        return this.bmirecordService.findAll()
    }
   

  @Post('add-bmi-record')
@UseGuards(AuthGuard())
async createBMIRecord(
        @Body()
        bmirecord:CreateBMIRecordDto):Promise<string>{

    return this.bmirecordService.create(bmirecord,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getBMIRecord(
        @Param('id') id:string
    ):Promise<BMIRecord>{
        return this.bmirecordService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.bmirecordService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateBMIRecord(
        @Param('id')
        id:string,
        @Body()
         bmirecord:UpdateBMIRecordDto):Promise<BMIRecord>{
    return this.bmirecordService.updateById(id,bmirecord);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteBMIRecord(
        @Param('id') id:string
    ):Promise<string>{
        return this.bmirecordService.deleteById(id);
    }
}
