import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Company, CompanySchema } from './schemas/companySchema';
import { Driver, DriverSchema } from './schemas/driverSchema';
import { Job, JobSchema } from './schemas/jobSchema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/finderDB'),
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: Driver.name, schema: DriverSchema },
      { name: Job.name, schema: JobSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
