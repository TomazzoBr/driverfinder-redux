import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';

import { Driver } from '../schemas/driverSchema';
import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get(':driverId')
  async getDriver(@Param('driverId') driverId: string): Promise<Driver> {
    return this.driverService.getDriverById(driverId);
  }

  @Get()
  async getDrivers(): Promise<Driver[]> {
    return this.driverService.getDrivers();
  }

  @Post()
  async createDriver(
    @Body() createDriveryDto: CreateDriverDto,
  ): Promise<Driver> {
    return this.driverService.createDriver(
      createDriveryDto.driverName,
      createDriveryDto.driverLocation,
      createDriveryDto.desiredJob,
      createDriveryDto.availableTime,
    );
  }

  @Patch(':driverId')
  async updateDriver(
    @Param('driverId') driverId: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(driverId, updateDriverDto);
  }
}
