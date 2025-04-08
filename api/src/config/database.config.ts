import { registerAs } from '@nestjs/config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

export default registerAs('database', (): SqlServerConnectionOptions => ({
  type: 'mssql',
  host: process.env.SQL_SERVER,
  port: parseInt(process.env.SQL_PORT || '1433', 10),
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  extra: {
    trustServerCertificate: true,
    server: process.env.SQL_SERVER,
  },
  synchronize: false,
  entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
}));
