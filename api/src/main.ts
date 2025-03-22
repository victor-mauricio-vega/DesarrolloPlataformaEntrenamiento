import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  app.setGlobalPrefix('api');

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const isProd = configService.get<string>('NODE_ENV') === 'prod';
const host = isProd
  ? 'https://entrenamientobeta.esri.co/api/'
  : `http://localhost:${port}/api/`;

  const config = new DocumentBuilder()
    .setTitle('API Entrenamiento Esri Nosa')
    .addServer(host)
    .setDescription(
      'Aplicación que provee los datos necesarios de la plataforma de entrenamiento',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(port);

  console.log(`Enviroment ${process.env.NODE_ENV}`);
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
}
bootstrap();
