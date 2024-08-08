// src/work/work.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';
import { WorkSchema } from './schemas/work.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Work', schema: WorkSchema }]),
  ],
  controllers: [WorkController],
  providers: [WorkService],
  exports: [WorkService],
})
export class WorkModule {}
