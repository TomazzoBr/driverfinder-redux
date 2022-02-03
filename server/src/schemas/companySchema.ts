import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  companyLocation: string;

  @Prop({ required: true })
  goodsType: string;
}

export const CatSchema = SchemaFactory.createForClass(Company);
