import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop()
  companyId: string;

  @Prop()
  company: string;

  @Prop()
  jobName: string;

  @Prop()
  size: string;

  @Prop()
  time: string;

  @Prop()
  distance: string;

  @Prop()
  description: string;
}

export const CatSchema = SchemaFactory.createForClass(Job);
