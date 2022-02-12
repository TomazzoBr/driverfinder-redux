import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateJobDto } from 'src/dto/update-job.dto';

import { Company } from 'src/schemas/companySchema';
import { Job } from 'src/schemas/jobSchema';
import { JobRepository } from './job.repository';

@Injectable()
export class JobService {
  constructor(private readonly jobRepository: JobRepository) {}

  async getJobById(jobId: string): Promise<Job> {
    return this.jobRepository.findOne({ jobId });
  }

  async getJobs(): Promise<Job[]> {
    return this.jobRepository.find({});
  }

  async createJob(
    jobName: string,
    size: string,
    time: string,
    distance: string,
    description: string,
    company: Company,
  ): Promise<Job> {
    return this.jobRepository.create({
      jobId: uuidv4(),
      jobName,
      size,
      time,
      distance,
      description,
      company,
    });
  }

  async updateJob(jobId: string, jobUpdates: UpdateJobDto): Promise<Job> {
    return this.jobRepository.findOneAndUpdate({ jobId }, jobUpdates);
  }
}
