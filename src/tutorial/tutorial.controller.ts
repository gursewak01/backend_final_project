import { AuthGuard } from '@nestjs/passport';
import { TutorialService } from './tutorial.service';
import { Tutorial } from './schema/tutorial.schema';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { SearchDto } from './dto/keyword-search.dto';
import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';


@Controller('tutorial')
export class TutorialController {
    constructor (private tutorialService:TutorialService,){
    }

  @Get('all-tutorial')
@UseGuards(AuthGuard())
    async getAllTutorial():Promise<Tutorial[]>{
        return this.tutorialService.findAll()
    }
   

  @Post('add-tutorial')
@UseGuards(AuthGuard())
async createTutorial(
        @Body()
        tutorial:CreateTutorialDto):Promise<string>{

    return this.tutorialService.create(tutorial,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getTutorial(
        @Param('id') id:string
    ):Promise<Tutorial>{
        return this.tutorialService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.tutorialService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateTutorial(
        @Param('id')
        id:string,
        @Body()
         tutorial:UpdateTutorialDto):Promise<Tutorial>{
    return this.tutorialService.updateById(id,tutorial);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteTutorial(
        @Param('id') id:string
    ):Promise<string>{
        return this.tutorialService.deleteById(id);
    }
}
