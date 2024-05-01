import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TutorialType } from './schema/tutorial type.schema';
import { UpdateTutorialTypeDto } from './dto/update-tutorial type.dto';
import { CreateTutorialTypeDto } from './dto/create-tutorial type.dto';
import { SearchDto } from './dto/keyword-search.dto';
import { TutorialTypeService } from './tutorial type.service';

@Controller('tutorial-type')
export class TutorialTypeController {
    constructor (private tutorialtypeService:TutorialTypeService,){
    }

  @Get('all-tutorial-type')
@UseGuards(AuthGuard())
    async getAllTutorialType():Promise<TutorialType[]>{
        return this.tutorialtypeService.findAll()
    }
   

  @Post('add-tutorial-type')
@UseGuards(AuthGuard())
async createTutorialType(
        @Body()
        tutorialtype:CreateTutorialTypeDto):Promise<string>{

    return this.tutorialtypeService.create(tutorialtype,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getTutorialType(
        @Param('id') id:string
    ):Promise<TutorialType>{
        return this.tutorialtypeService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.tutorialtypeService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateTutorialType(
        @Param('id')
        id:string,
        @Body()
         tutorialtype:UpdateTutorialTypeDto):Promise<TutorialType>{
    return this.tutorialtypeService.updateById(id,tutorialtype);
    }
   
     @Delete(':id') 
    @UseGuards(AuthGuard())
    async deleteTutorialType(
        @Param('id') id:string
    ):Promise<string>{
        return this.tutorialtypeService.deleteById(id);
    }
}
