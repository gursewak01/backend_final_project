import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AuthModule } from './auth/auth.module';
import { BMIRecordModule } from './bmi record/bmi-record.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { StepWalkTrackingModule } from './step walk tracking/step-walk-tracking.module';
import { TutorialTypeModule } from './tutorial type/tutorial type.module';
import { TutorialTagsModule } from './tutorial tags/tutorial-tags.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { TagsModule } from './tags/tags.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BMIRecordModule,
		TutorialModule,
		StepWalkTrackingModule,
		TutorialTypeModule,
		TutorialTagsModule,
		RecommendationModule,
		TagsModule,
    AuthModule
  ],
})
export class AppModule {}
