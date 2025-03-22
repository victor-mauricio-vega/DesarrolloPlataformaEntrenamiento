import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'mssql',
  host: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: parseInt(process.env.SQL_PORT, 10) || 1433,
  extra: {
    trustServerCertificate: true,
  },
  dropSchema: false,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
}));
