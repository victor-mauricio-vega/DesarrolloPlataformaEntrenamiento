import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Salon } from './salon.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn({
    primaryKeyConstraintName: 'pk_ubicacion',
    comment: 'Clave primaria de la Ubicación',
  })
  pk_ubicacion: number;

  @Column({
    type: 'nvarchar',
    length: 50,
    nullable: false,
    comment: 'Nombre de la Ubicación',
  })
  nombre: string;

  @OneToOne(() => Ubicacion, (ubicacion) => ubicacion.pais)
  @JoinColumn({
    name: 'fk_pais',
    referencedColumnName: 'pk_ubicacion',
    foreignKeyConstraintName: 'fk_salon_ubicacion',
  })
  pais: Ubicacion;

  @ManyToOne(() => Salon, (salon) => salon.ubicacion)
  ubicaciones: Ubicacion[];

  @OneToMany(() => Salon, (salon) => salon.ubicacion)
  salones: Salon[];
}
