import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { BMIRecordSchema } from './schema/bmi-record.schema';
import { BMIRecordController } from './bmi-record.controller';
import { BMIRecordService } from './bmi-record.service';
import { Module } from '@nestjs/common';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'BMIRecord',schema:BMIRecordSchema}]),
  ],
  controllers: [BMIRecordController],
  providers: [BMIRecordService,]
})
export class BMIRecordModule {}
