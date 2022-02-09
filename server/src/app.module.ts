import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModel } from './company/company.model';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/dftest'), CompanyModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
