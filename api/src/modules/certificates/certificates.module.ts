import { Module } from '@nestjs/common';
import { CertificateController } from './controllers/certificate/certificate.controller';
import { CertificateService } from './services/certificate/certificate.service';

@Module({
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificatesModule {}
