import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from 'src/schemas/jobSchema';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobRepository } from './job.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobController],
  providers: [JobService, JobRepository],
})
export class JobModel {}
