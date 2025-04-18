import { Clase } from './../../classes/entities/clase.entity';
import { Empresa } from './../../companies/entities/empresa.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ubicacion } from './ubicacion.entity';
import { Usuario } from '../../users/entities/usuario.entity';
import { TipoDocumento } from '../../users/entities/tipoDocumento.entity';

@Entity('PAIS')
export class Pais {
  @PrimaryGeneratedColumn({ name: 'PK_PAIS', primaryKeyConstraintName: 'PK_PAIS', comment: 'Clave primaria de la tabla País' })
  pk_pais: number;

  @Column({ type: 'nvarchar', length: 50, nullable: false, comment: 'Nombre del país', name:'NOMBRE' })
  nombre: string;

  @OneToMany(() => Usuario, usuario => usuario.pais)
  usuarios: Usuario[];

  @OneToMany(() => TipoDocumento, tipoDocumento => tipoDocumento.pais)
    tiposDocumento: TipoDocumento[];

  /*
  @OneToMany(() => Clase, (clase) => clase.pais_orden_venta)
  clases: Clase[];

  @OneToMany(() => Empresa, (empresa) => empresa.pais)
  empresas: Empresa[];

  @OneToMany(() => Ubicacion, (ubicacion) => ubicacion.pais)
  ubicaciones: Ubicacion[];
  */
}
