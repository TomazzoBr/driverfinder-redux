import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCompanyDto } from 'src/dto/create-company.dto';
import { UpdateCompanyDto } from 'src/dto/update-company';

import { Company } from '../schemas/companySchema';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get(':companyId')
  async getCompany(@Param('companyId') companyId: string): Promise<Company> {
    return this.companyService.getCompanyById(companyId);
  }

  @Get()
  async getCompanies(): Promise<Company[]> {
    return this.companyService.getCompanies();
  }

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.createCompany(
      createCompanyDto.companyName,
      createCompanyDto.companyLocation,
      createCompanyDto.goodsType,
    );
  }

  @Patch(':companyId')
  async updateCompany(
    @Param('companyId') companyId: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompany(companyId, updateCompanyDto);
  }
}
