import { DataSource } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';

const envPath = join(process.cwd(), 'env', `.${process.env.NODE_ENV || 'dev'}.env`);
console.log('🌱 Cargando archivo de entorno:', envPath);

dotenvConfig({ path: envPath });

const options: SqlServerConnectionOptions = {
    type: 'mssql',
    host: process.env.SQL_SERVER, // Valor por defecto si no está en .env
    port: parseInt(process.env.SQL_PORT ), // Ya tiene valor por defecto
    username: process.env.SQL_USER , // Valor por defecto si no está en .env
    password: process.env.SQL_PASSWORD , // Valor por defecto si no está en .env
    database: process.env.SQL_DATABASE, // Valor por defecto si no está en .env
    options: { // Mueve trustServerCertificate dentro de 'options'
        encrypt: process.env.SQL_ENCRYPT === 'true' || false, // Valor por defecto si no está en .env
        trustServerCertificate: true,
    },
    synchronize: false,
    dropSchema: false,
    entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/../migrations/*.{ts,js}'],
};

const source = new DataSource(options);
console.log('NODE_ENV:', process.env.NODE_ENV);

export default source;