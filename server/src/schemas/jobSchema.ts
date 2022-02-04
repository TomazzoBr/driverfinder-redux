import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Company } from './companySchema';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  })
  companyId: Company;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  jobName: string;

  @Prop({ required: true })
  size: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  distance: string;

  @Prop()
  description: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
