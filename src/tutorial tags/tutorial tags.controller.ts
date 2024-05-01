import { AuthGuard } from '@nestjs/passport';
import { TutorialTagsService } from './tutorial-tags.service';
import { TutorialTags } from './schema/tutorial-tags.schema';
import { UpdateTutorialTagsDto } from './dto/update-tutorial-tags.dto';
import { CreateTutorialTagsDto } from './dto/create-tutorial tags.dto';
import { SearchDto } from './dto/keyword-search.dto';
import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';


@Controller('tutorial-tags')
export class TutorialTagsController {
    constructor (private tutorialtagsService:TutorialTagsService,){
    }

  @Get('all-tutorial-tags')
@UseGuards(AuthGuard())
    async getAllTutorialTags():Promise<TutorialTags[]>{
        return this.tutorialtagsService.findAll()
    }
   

  @Post('add-tutorial-tags')
@UseGuards(AuthGuard())
async createTutorialTags(
        @Body()
        tutorialtags:CreateTutorialTagsDto):Promise<string>{

    return this.tutorialtagsService.create(tutorialtags,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getTutorialTags(
        @Param('id') id:string
    ):Promise<TutorialTags>{
        return this.tutorialtagsService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard())
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.tutorialtagsService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard())
    async updateTutorialTags(
        @Param('id')
        id:string,
        @Body()
         tutorialtags:UpdateTutorialTagsDto):Promise<TutorialTags>{
    return this.tutorialtagsService.updateById(id,tutorialtags);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteTutorialTags(
        @Param('id') id:string
    ):Promise<string>{
        return this.tutorialtagsService.deleteById(id);
    }
}
