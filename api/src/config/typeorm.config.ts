import { DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `env/.env.${process.env.NODE_ENV || 'dev'}` });

const config: DataSourceOptions = {
  type: 'mssql',
  host: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: parseInt(process.env.SQL_PORT || '1433', 10),
  extra: {
    trustServerCertificate: true,
  },
  dropSchema: false,
  synchronize: false,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['../modules/databases/migrations/*.js'],
};

export default config;
