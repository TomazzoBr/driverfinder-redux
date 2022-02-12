import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModel } from './company/company.model';
import { JobModel } from './job/job.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dftest'),
    CompanyModel,
    JobModel,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
