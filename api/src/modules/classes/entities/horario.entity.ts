import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Grupo } from './grupo.entity';

@Entity()
@Check('ck_hora_inicio_fin', 'hora_fin>hora_inicio')
export class Horario {
  @PrimaryGeneratedColumn({ comment: 'Clave primaria de Horario' })
  pk_horario: number;
  @Column({ type: 'date', comment: 'Fecha del Horario' })
  fecha: Date;
  @Column({ type: 'time', comment: 'Hora de Inicio' })
  hora_inicio: Date;
  @Column({ type: 'time', comment: 'Hora de finalización' })
  hora_fin: Date;

  @ManyToOne(() => Grupo, (grupo) => grupo.horario)
  @JoinColumn({
    name: 'fk_grupo',
    referencedColumnName: 'pk_grupo',
    foreignKeyConstraintName: 'fk_horario_grupo',
  })
  grupos: Grupo[];
}
