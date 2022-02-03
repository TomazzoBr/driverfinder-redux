import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Job } from './jobSchema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  companyLocation: string;

  @Prop({ required: true })
  goodsType: string;

  @Prop()
  jobs: Job[];
}

export const CatSchema = SchemaFactory.createForClass(Company);
