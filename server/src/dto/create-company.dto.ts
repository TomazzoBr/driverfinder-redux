import { Job } from '../schemas/jobSchema';

export class CreateCompanyDto {
  companyName: string;
  companyLocation: string;
  goodsType: string;
  jobs?: Job[];
}
