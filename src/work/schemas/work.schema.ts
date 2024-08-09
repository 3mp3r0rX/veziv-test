import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkDocument = Work & Document;

@Schema()
export class Work {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: false })
  clientLink?: string;

  @Prop({ required: true, enum: ['hidden', 'visible'] })
  status: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
