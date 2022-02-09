import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCompanyDto } from 'src/dto/update-company';

import { Company } from '../schemas/companySchema';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async getCompanyById(companyId: string): Promise<Company> {
    return this.companyRepository.findOne({ companyId });
  }

  async getCompanies(): Promise<Company[]> {
    return this.companyRepository.find({});
  }

  async createCompany(
    companyName: string,
    companyLocation: string,
    goodsType: string,
  ): Promise<Company> {
    return this.companyRepository.create({
      companyId: uuidv4(),
      companyName,
      companyLocation,
      goodsType,
      jobs: [],
    });
  }

  async updateCompany(
    companyId: string,
    companyUpdates: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyRepository.findOneAndUpdate(
      { companyId },
      companyUpdates,
    );
  }
}
