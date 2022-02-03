import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getCompanyProfile(): object {
    return this.appService.getCompanyProfile();
  }

  @Get()
  @HttpCode(200)
  getDriverProfile(): object {
    return this.appService.getDriverProfile();
  }

  @Post()
  @HttpCode(201)
  postCompanyProfile(): object {
    return this.appService.postCompanyProfile();
  }

  @Post()
  @HttpCode(201)
  postDriverProfile(): object {
    return this.appService.postDriverProfile();
  }

  @Post()
  @HttpCode(201)
  postJobs(): object {
    return this.appService.postJobs();
  }
}
