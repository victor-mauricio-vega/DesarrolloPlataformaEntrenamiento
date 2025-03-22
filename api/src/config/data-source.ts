import { DataSource } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import databaseConfig from './database.config';
import { DataSourceOptions } from 'typeorm';
import config from './typeorm.config';

// Carga el archivo correcto según NODE_ENV
dotenvConfig({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
// Obtiene la configuración exportada
const dbConfig = databaseConfig() as DataSourceOptions;

console.log(process.env);
// (configService: ConfigType<typeof config>) => {
//   const { server, database, user, password, encrypt, port } =
//     configService.sqlserver;
// };
// console.log(process.env);
const source = new DataSource(config);

export default source;
