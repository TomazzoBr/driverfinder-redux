import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  companyName: string;

  @Prop()
  companyLocation: string;

  @Prop()
  goodsType: string;
}

export const CatSchema = SchemaFactory.createForClass(Company);
