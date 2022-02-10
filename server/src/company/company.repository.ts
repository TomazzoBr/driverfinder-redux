import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Company, CompanyDocument } from '../schemas/companySchema';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async findOne(companyFilterQuery: FilterQuery<Company>): Promise<Company> {
    return this.companyModel.findOne(companyFilterQuery);
  }

  async find(companyFilterQuery: FilterQuery<Company>): Promise<Company[]> {
    return this.companyModel.find(companyFilterQuery);
  }

  async create(company: Company): Promise<Company> {
    const newCompany = new this.companyModel(company);
    return newCompany.save();
  }

  async findOneAndUpdate(
    companyFilterQuery: FilterQuery<Company>,
    company: Partial<Company>,
  ): Promise<Company> {
    return this.companyModel.findOneAndUpdate(companyFilterQuery, company, {
      new: true,
    });
  }
}
