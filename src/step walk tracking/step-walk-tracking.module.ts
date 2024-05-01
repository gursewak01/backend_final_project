import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { StepWalkTrackingSchema } from './schema/step-walk-tracking.schema';
import { StepWalkTrackingController } from './step-walk-tracking.controller';
import { StepWalkTrackingService } from './step-walk-tracking.service';
//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'StepWalkTracking',schema:StepWalkTrackingSchema}]),
  //Place all your imports here
   
  ],
  controllers: [StepWalkTrackingController],
  providers: [StepWalkTrackingService,]
})
export class StepWalkTrackingModule {}
