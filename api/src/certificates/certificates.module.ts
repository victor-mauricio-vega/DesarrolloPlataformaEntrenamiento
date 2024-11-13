import { Module } from '@nestjs/common';
import { CertificateController } from './controllers/certificate/certificate.controller';

@Module({
  controllers: [CertificateController],
})
export class CertificatesModule {}
