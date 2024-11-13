import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Estudiante } from '../../usuario/entities/estudiante.entity';
import { Clase } from './clase.entity';
import { Grupo } from './grupo.entity';

@Entity()
export class Certificado {
  @PrimaryGeneratedColumn({ comment: 'Clave primaria del Certificado' })
  pk_certificado: number;

  @Column({ type: 'date', comment: 'Fecha de expedición del certificado' })
  fecha: Date;

  @ManyToOne(() => Clase, (clase) => clase.grupo)
  @JoinColumn({
    name: 'fk_grupo',
    referencedColumnName: 'pfk_grupo',
    foreignKeyConstraintName: 'fk_certificado_clase',
  })
  grupo: Grupo;

  @ManyToOne(() => Clase, (clase) => clase.estudiante)
  @JoinColumn({
    name: 'fk_estudiante',
    referencedColumnName: 'pfk_estudiante',
    foreignKeyConstraintName: 'fk_certificado_clase',
  })
  estudiante: Estudiante;
}
