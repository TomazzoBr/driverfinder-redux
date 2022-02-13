import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from 'src/schemas/driverSchema';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverRepository } from './driver.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
  ],
  controllers: [DriverController],
  providers: [DriverService, DriverRepository],
})
export class DriverModel {}
