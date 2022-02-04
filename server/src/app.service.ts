import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}
  getCompanyProfile(): object {
    return {
      companyName: 'Company name',
      companyLocation: 'Company location',
      goodsType: 'Types of goods',
    };
  }
  getDriverProfile(): object {
    return {
      driverName: 'Driver name',
      driverLocation: 'Driver location',
      desiredJob: 'Desired job',
      availableTime: 'Available time',
    };
  }
  postCompanyProfile(): object {
    return {
      companyName: 'Company name',
      companyLocation: 'Company location',
      goodsType: 'Types of goods',
    };
  }
  postDriverProfile(): object {
    return {
      driverName: 'Driver name',
      driverLocation: 'Driver location',
      desiredJob: 'Desired job',
      availableTime: 'Available time',
    };
  }
  postJobs(): object {
    return {
      company: 'Company Name',
      jobName: 'Job Name',
      size: 'Job size',
      time: 'Job time',
      distance: 'Job distance',
      description: 'Job description',
    };
  }
}
