import { Job } from 'src/company/schemas/jobSchema';

export class UpdateCompanyDto {
  companyName: string;
  companyLocation: string;
  goodsType: string;
  jobs?: Job[];
}
