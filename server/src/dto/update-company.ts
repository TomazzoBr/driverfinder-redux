import { Job } from 'src/schemas/jobSchema';

export class UpdateCompanyDto {
  companyName: string;
  companyLocation: string;
  goodsType: string;
  jobs?: Job[];
}
