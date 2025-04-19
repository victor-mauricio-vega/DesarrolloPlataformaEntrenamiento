import { DataSource } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { Certificado } from '../modules/certificates/entities/certificado.entity';
import { TipoDocumento } from '../modules/users/entities/tipoDocumento.entity';
import { Pais } from '../modules/places/entities/pais.entity';
import { Usuario } from '../modules/users/entities/usuario.entity';
import { Estudiante } from '../modules/users/entities/estudiante.entity';
import { Clase } from '../modules/classes/entities/clase.entity';
import { Grupo } from '../modules/classes/entities/grupo.entity';
import { Curso } from '../modules/classes/entities/curso.entity';
import { TipoGrupo } from '../modules/classes/entities/tipoGrupo.entity';

const envPath = join(process.cwd(), 'env', `.${process.env.NODE_ENV || 'dev'}.env`);
console.log('🌱 Cargando archivo de entorno:', envPath);

dotenvConfig({ path: envPath });

const options: SqlServerConnectionOptions = {
    type: 'mssql',
    host: process.env.SQL_SERVER, 
    port: parseInt(process.env.SQL_PORT ), 
    username: process.env.SQL_USER , 
    password: process.env.SQL_PASSWORD , 
    database: process.env.SQL_DATABASE, 
    options: { 
        encrypt: process.env.SQL_ENCRYPT === 'true', 
        trustServerCertificate: true,
    },
    synchronize: false,
    dropSchema: false,
    //entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
    //Se van agregando las entidades que se van creando
    entities:[TipoDocumento, Pais, Usuario, Estudiante,Clase, Grupo, Curso, TipoGrupo],
    migrations: [__dirname + '/../migrations/*.{ts,js}'],
};

const source = new DataSource(options);
console.log('NODE_ENV:', process.env.NODE_ENV);

export default source;