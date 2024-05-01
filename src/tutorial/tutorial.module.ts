import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { TutorialSchema } from './schema/tutorial.schema';
import { TutorialController } from './tutorial.controller';
import { TutorialService } from './tutorial.service';
import { Module } from '@nestjs/common';

//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Tutorial',schema:TutorialSchema}]),
  //Place all your imports here
   
  ],
  controllers: [TutorialController],
  providers: [TutorialService,]
})
export class TutorialModule {}
