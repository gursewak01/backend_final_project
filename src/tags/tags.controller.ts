import { AuthGuard } from '@nestjs/passport';
import { TagsService } from './tags.service';
import { Tags } from './schema/tags.schema';
import { UpdateTagsDto } from './dto/update-tags.dto';
import { CreateTagsDto } from './dto/create-tags.dto';
import { Body, Controller,Delete,Get,Param,Post, Put,Req, UseGuards } from '@nestjs/common';


@Controller('tags')
export class TagsController {
    constructor (private tagsService:TagsService,){
    }

  @Get('all-tags')
@UseGuards(AuthGuard())
    async getAllTags():Promise<Tags[]>{
        return this.tagsService.findAll()
    }
   

  @Post('add-tags')
@UseGuards(AuthGuard())
async createTags(
        @Body()
        tags:CreateTagsDto):Promise<string>{

    return this.tagsService.create(tags,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard())
    async getTags(
        @Param('id') id:string
    ):Promise<Tags>{
        return this.tagsService.findById(id);
    }

      

     @Put(':id')
@UseGuards(AuthGuard())
    async updateTags(
        @Param('id')
        id:string,
        @Body()
         tags:UpdateTagsDto):Promise<Tags>{
    return this.tagsService.updateById(id,tags);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard())
    async deleteTags(
        @Param('id') id:string
    ):Promise<string>{
        return this.tagsService.deleteById(id);
    }
}
