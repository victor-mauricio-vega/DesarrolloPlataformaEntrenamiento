import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/config';
import { View_Clases_Estudiantes } from 'src/users/views/clases_estudiantes.view';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          inject: [config.KEY],
          useFactory: (configService: ConfigType<typeof config>) => {
            const { server, database, user, password, encrypt, port } =
              configService.sqlserver;
    
            return {
              type: 'mssql',
              host: server,
              database,
              username: user,
              password,
              port,
              synchronize: false,
              autoLoadEntities: true,
              entities: [View_Clases_Estudiantes],
              extra: {
                trustServerCertificate: true,
              },
            };
          },
        }),
      ],
      providers: [],
      exports: [TypeOrmModule],
})
export class DatabasesModule {}
