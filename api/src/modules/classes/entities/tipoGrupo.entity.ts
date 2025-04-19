import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Grupo } from './grupo.entity';

@Entity({ name: 'TIPO_GRUPO' })
export class TipoGrupo {
  @PrimaryGeneratedColumn({ 
    name: 'PK_TIPO_GRUPO',
    primaryKeyConstraintName: 'PK_TIPO_GRUPO',
   })
  pk_tipo_grupo: number;

  @Column({ name: 'NOMBRE', type: 'varchar', length: 50 })
  nombre: string;

  @OneToMany(() => Grupo, (g) => g.tipoGrupo)
  grupos: Grupo[];
}
