import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Job } from './jobSchema';

export type CompanyDocument = Company & Document;

@Schema({ collection: 'companies' })
export class Company {
  @Prop()
  companyId: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  companyLocation: string;

  @Prop({ required: true })
  goodsType: string;

  // @Prop([Array])
  // jobs: Job[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
