import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkModule } from './work/work.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/veziv-test'),
    WorkModule,
  ],
})
export class AppModule {}
