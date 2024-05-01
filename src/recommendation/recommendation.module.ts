import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { RecommendationSchema } from './schema/recommendation.schema';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { Module } from '@nestjs/common';


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Recommendation',schema:RecommendationSchema}]),
  ],
  controllers: [RecommendationController],
  providers: [RecommendationService,]
})
export class RecommendationModule {}
