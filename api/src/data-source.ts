import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

console.log(process.env);
// (configService: ConfigType<typeof config>) => {
//   const { server, database, user, password, encrypt, port } =
//     configService.sqlserver;
// };
// console.log(process.env);
const source = new DataSource({
  type: 'mssql',
  host: process.env.SQL_SERVER || 'ealopez\\ealopez',
  database: process.env.SQL_DATABASE || 'Entrenamiento_Nest',
  username: process.env.SQL_USER || 'sa',
  password: process.env.SQL_PASSWORD || 'ealopez',
  port: parseInt(process.env.SQL_PORT, 10) || 1433,
  extra: {
    trustServerCertificate: true,
  },
  dropSchema: false,
  synchronize: true,
  entities: [join(__dirname, '**', '**', '*.entity.{ts,js}')],
  migrations: ['/src/database/migrations'],
});

export default source;
