import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getCompanyProfile(): string {
    return this.appService.getCompanyProfile();
  }

  @Get()
  @HttpCode(200)
  getDriverProfile(): string {
    return this.appService.getDriverProfile();
  }

  @Post()
  @HttpCode(201)
  postCompanyProfile(): string {
    return this.appService.postCompanyProfile();
  }

  @Post()
  @HttpCode(201)
  postDriverProfile(): string {
    return this.appService.postDriverProfile();
  }

  @Post()
  @HttpCode(201)
  postJobs(): string {
    return this.appService.postJobs();
  }
}
