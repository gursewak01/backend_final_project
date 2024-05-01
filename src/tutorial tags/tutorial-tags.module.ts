import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { TutorialTagsSchema } from './schema/tutorial-tags.schema';
import { TutorialTagsController } from './tutorial tags.controller';
import { TutorialTagsService } from './tutorial-tags.service';
//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'TutorialTags',schema:TutorialTagsSchema}]),
  //Place all your imports here
   
  ],
  controllers: [TutorialTagsController],
  providers: [TutorialTagsService,]
})
export class TutorialTagsModule {}
