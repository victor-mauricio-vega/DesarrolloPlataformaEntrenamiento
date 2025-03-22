import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificatesModule } from './modules/certificates/certificates.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { UsersModule } from './modules/users/users.module';
import { ClassesModule } from './modules/classes/classes.module';
import { SurveysModule } from './modules/surveys/surveys.module';
import { PlacesModule } from './modules/places/places.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabasesModule } from './modules/databases/databases.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './config/environments';
import config from './config/config';
import Joi from 'joi';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config, databaseConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        SQL_SERVER: Joi.string().required(),
        SQL_DATABASE: Joi.string().required(),
        SQL_USER: Joi.string().required(),
        SQL_PASSWORD: Joi.string().required(),
        SQL_PORT: Joi.number().required(),
        RUTA_MATERIAL: Joi.string().optional().allow(''),
        HOST_MATERIAL: Joi.string().optional().allow(''),
      }),
    }),
    CertificatesModule,
    CompaniesModule,
    UsersModule,
    ClassesModule,
    SurveysModule,
    PlacesModule,
    AuthModule,
    DatabasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
