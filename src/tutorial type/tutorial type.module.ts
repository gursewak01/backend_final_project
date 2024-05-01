import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { TutorialTypeSchema } from './schema/tutorial type.schema';
import { TutorialTypeController } from './tutorial-type.controller';
import { TutorialTypeService } from './tutorial type.service';
import { Module } from '@nestjs/common';

//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'TutorialType',schema:TutorialTypeSchema}]),
  //Place all your imports here
   
  ],
  controllers: [TutorialTypeController],
  providers: [TutorialTypeService,]
})
export class TutorialTypeModule {}
