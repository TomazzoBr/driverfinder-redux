import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Job, JobDocument } from 'src/schemas/jobSchema';

@Injectable()
export class JobRepository {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async findOne(jobFilterQuery: FilterQuery<Job>): Promise<Job> {
    return this.jobModel.findOne(jobFilterQuery);
  }

  async find(jobFilterQuery: FilterQuery<Job>): Promise<Job[]> {
    return this.jobModel.find(jobFilterQuery);
  }

  async create(job: Job): Promise<Job> {
    const newJob = new this.jobModel(job);
    return newJob.save();
  }

  async findOneAndUpdate(
    jobFilterQuery: FilterQuery<Job>,
    job: Partial<Job>,
  ): Promise<Job> {
    return this.jobModel.findOneAndUpdate(jobFilterQuery, job, {
      new: true,
    });
  }
}
