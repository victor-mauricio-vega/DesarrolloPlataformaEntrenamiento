import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'TIPO_GRUPO' })
export class TipoGrupo {
  @PrimaryGeneratedColumn({ name: 'PK_TIPO_GRUPO' })
  pk_tipo_grupo: number;

  @Column({ name: 'NOMBRE', type: 'varchar', length: 50 })
  nombre: string;
}
