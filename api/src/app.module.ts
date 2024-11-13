import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificatesModule } from './certificates/certificates.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { ClassesModule } from './classes/classes.module';
import { SurveysModule } from './surveys/surveys.module';
import { PlacesModule } from './places/places.module';
import { AuthModule } from './auth/auth.module';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [CertificatesModule, CompaniesModule, UsersModule, ClassesModule, SurveysModule, PlacesModule, AuthModule, DatabasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
