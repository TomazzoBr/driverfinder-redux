import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDriverDto } from 'src/dto/update-driver.dto';

import { Driver } from 'src/schemas/driverSchema';
import { DriverRepository } from './driver.repository';

@Injectable()
export class DriverService {
  constructor(private readonly driverRepository: DriverRepository) {}

  async getDriverById(driverId: string): Promise<Driver> {
    return this.driverRepository.findOne({ driverId });
  }

  async getDrivers(): Promise<Driver[]> {
    return this.driverRepository.find({});
  }

  async createDriver(
    driverName: string,
    driverLocation: string,
    desiredJob: string,
    availableTime: string,
  ): Promise<Driver> {
    return this.driverRepository.create({
      driverId: uuidv4(),
      driverName,
      driverLocation,
      desiredJob,
      availableTime,
    });
  }

  async updateDriver(
    driverId: string,
    driverUpdates: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverRepository.findOneAndUpdate({ driverId }, driverUpdates);
  }
}
