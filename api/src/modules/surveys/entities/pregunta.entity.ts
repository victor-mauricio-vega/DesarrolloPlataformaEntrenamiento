import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Check,
} from 'typeorm';

import { Encuesta } from './encuesta.entity';

@Entity()
@Check('ck_estado_pregunta', "estado='Deshabilitado' OR estado='Habilitado'")
export class Pregunta {
  @PrimaryGeneratedColumn({ comment: 'Clave primaria de la Pregunta' })
  pk_pregunta: number;
  @Column({ type: 'nvarchar', length: 500, comment: 'Texto de la Pregunta' })
  pregunta: string;
  @Column({ type: 'nvarchar', length: 50, comment: 'Categoría de la Pregunta' })
  categoria: string;
  @Column({ type: 'nvarchar', length: 50, comment: 'Tipo de la Pregunta' })
  tipo: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    comment:
      "Si el estado es 'Habilitado' la Pregunta se podrá mostrar en la Encuesta",
  })
  estado: string;
  @Column({ type: 'int', nullable: true, comment: '' })
  orden: number;

  @OneToMany(() => Encuesta, (encuesta) => encuesta.pregunta)
  encuestas: Encuesta[];
}
