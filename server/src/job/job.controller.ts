import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateJobDto } from 'src/dto/create-job.dto';
import { UpdateJobDto } from 'src/dto/update-job.dto';

import { Job } from 'src/schemas/jobSchema';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get(':companyId/:jobId')
  async getJob(@Param('jobId') jobId: string): Promise<Job> {
    return this.jobService.getJobById(jobId);
  }

  @Get()
  async getJobs(): Promise<Job[]> {
    return this.jobService.getJobs();
  }

  @Post()
  async createJob(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return this.jobService.createJob(
      createJobDto.jobName,
      createJobDto.size,
      createJobDto.time,
      createJobDto.distance,
      createJobDto.description,
      createJobDto.company,
    );
  }

  @Patch(':companyId/:jobId')
  async updateUser(
    @Param('jobId') jobId: string,
    @Body() updateJobDto: UpdateJobDto,
  ): Promise<Job> {
    return this.jobService.updateJob(jobId, updateJobDto);
  }
}
