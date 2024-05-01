import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { TagsSchema } from './schema/tags.schema';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { Module } from '@nestjs/common';
//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Tags',schema:TagsSchema}]),
  //Place all your imports here
   
  ],
  controllers: [TagsController],
  providers: [TagsService,]
})
export class TagsModule {}
