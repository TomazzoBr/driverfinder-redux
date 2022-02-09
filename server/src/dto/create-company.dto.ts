import { Job } from '../company/schemas/jobSchema';

export class CreateCompanyDto {
  companyName: string;
  companyLocation: string;
  goodsType: string;
  jobs?: Job[];
}
