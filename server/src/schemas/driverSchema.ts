import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
  @Prop()
  driverName: string;

  @Prop()
  driverLocation: string;

  @Prop()
  desiredJob: string;

  @Prop()
  availableTime: string;
}

export const CatSchema = SchemaFactory.createForClass(Driver);
