import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Driver, DriverDocument } from 'src/schemas/driverSchema';

@Injectable()
export class DriverRepository {
  constructor(
    @InjectModel(Driver.name) private driverModel: Model<DriverDocument>,
  ) {}

  async findOne(driverFilterQuery: FilterQuery<Driver>): Promise<Driver> {
    return this.driverModel.findOne(driverFilterQuery);
  }

  async find(driverFilterQuery: FilterQuery<Driver>): Promise<Driver[]> {
    return this.driverModel.find(driverFilterQuery);
  }

  async create(driver: Driver): Promise<Driver> {
    const newDriver = new this.driverModel(driver);
    return newDriver.save();
  }

  async findOneAndUpdate(
    driverFilterQuery: FilterQuery<Driver>,
    driver: Partial<Driver>,
  ): Promise<Driver> {
    return this.driverModel.findOneAndUpdate(driverFilterQuery, driver, {
      new: true,
    });
  }
}
