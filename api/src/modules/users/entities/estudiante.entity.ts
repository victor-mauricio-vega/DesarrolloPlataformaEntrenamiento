import { Check, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clase } from '../../classes/entities/clase.entity';
import { Usuario } from '../entities/usuario.entity';

@Entity('ESTUDIANTE')
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'PK_ESTUDIANTE', primaryKeyConstraintName: 'PK_ESTUDIANTE' })
  pk_estudiante: number;

  @Column({ type: 'bit', default: () => '1', name: 'REGISTRADO' })
  registrado: boolean;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'FK_USUARIO', foreignKeyConstraintName: 'FK_ESTUDIANTE_USUARIO' })
  @Index('IXFK_ESTUDIANTE_USUARIO')
  usuario: Usuario;

  @OneToMany(() => Clase, (clase) => clase.estudiante)
  clases: Clase[];
}
