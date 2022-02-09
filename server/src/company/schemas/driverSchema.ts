import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
  @Prop({ required: true })
  driverName: string;

  @Prop({ required: true })
  driverLocation: string;

  @Prop()
  desiredJob: string;

  @Prop({ required: true })
  availableTime: string;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
