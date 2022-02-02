import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCompanyProfile(): string {
    return 'Get company profile';
  }
  getDriverProfile(): string {
    return 'Get driver profile';
  }
  postCompanyProfile(): string {
    return 'Post company profile';
  }
  postDriverProfile(): string {
    return 'Post driver profile';
  }
  postJobs(): string {
    return 'Post jobs';
  }
}
