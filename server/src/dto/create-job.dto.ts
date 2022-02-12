import { Company } from 'src/schemas/companySchema';

export class CreateJobDto {
  company: Company;
  jobName: string;
  size: string;
  time: string;
  distance: string;
  description: string;
}
