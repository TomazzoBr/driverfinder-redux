import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
