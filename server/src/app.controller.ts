import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getNest(): string {
    return this.appService.getNest();
  }

  @Get()
  @HttpCode(200)
  getSomething(): string {
    return this.appService.getSomething();
  }
}
