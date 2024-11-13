import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company/company.controller';
import { SectorController } from './controllers/sector/sector.controller';

@Module({
  controllers: [CompanyController, SectorController]
})
export class CompaniesModule {}
