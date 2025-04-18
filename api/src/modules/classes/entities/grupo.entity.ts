import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Instructor } from '../../users/entities/instructor.entity';
import { Clase } from './clase.entity';
import { Curso } from './curso.entity';
import { Horario } from './horario.entity';
import { Salon } from '../../places/entities/salon.entity';
import { TipoGrupo } from './tipoGrupo.entity';

@Entity('GRUPO')
export class Grupo {
  @PrimaryGeneratedColumn({name: 'PK_GRUPO', primaryKeyConstraintName: 'PK_GRUPO'})
  pk_grupo: number;

  /* @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  tipo: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  alcance: string;
  @Column({ type: 'bit', nullable: true })
  entrega_modificada: boolean;
  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  informe: string;

  @ManyToOne(() => Curso, (curso) => curso.grupos)
  @JoinColumn({
    name: 'fk_curso',
    referencedColumnName: 'pk_curso',
    foreignKeyConstraintName: 'fk_grupo_curso',
  })
  curso: Curso;

  @ManyToOne(() => Salon, (salon) => salon.grupos)
  @JoinColumn({
    name: 'fk_salon',
    referencedColumnName: 'pk_salon',
    foreignKeyConstraintName: 'fk_grupo_salon',
  })
  salon: Salon;

  @ManyToOne(() => Instructor, (instructor) => instructor.grupos)
  @JoinColumn({
    name: 'fk_instructor',
    referencedColumnName: 'pk_instructor',
    foreignKeyConstraintName: 'fk_grupo_instructor',
  })
  instructor: Instructor;

  @OneToMany(() => Horario, (horario) => horario.grupos)
  horario: Horario;
 */
  @OneToMany(() => Clase, (clase) => clase.grupo)
  clases: Clase[];

/*   @ManyToOne(() => TipoGrupo)
  @JoinColumn({ name: 'FK_TIPO_GRUPO', foreignKeyConstraintName: 'FK_GRUPO_TIPO_GRUPO' })
  tipoGrupo: TipoGrupo; */

}
