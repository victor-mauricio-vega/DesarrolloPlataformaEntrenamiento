import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from './grupo.entity';

@Index('IXAX_SIGLA', ['sigla'], { unique: false })
@Entity('CURSO')
export class Curso {
  @PrimaryGeneratedColumn({
    name: 'PK_CURSO',
    primaryKeyConstraintName: 'PK_CURSO',
  })
  pk_curso: number;

  @Column({ name: 'SIGLA', type: 'nvarchar', length: 50 })
  sigla: number;

  @Column({ name: 'NOMBRE', type: 'nvarchar', length: 100 })
  nombre: string;

  @Column({ name: 'INTENSIDAD', type: 'int' })
  intensidad: number;

  @Column({ name: 'ESTADO', type: 'bit' }) //  convertido a booleano comparado al anterior modelo
  estado: boolean;

  @Column({ name: 'ESTADO_MATERIAL', type: 'bit' }) //  convertido a booleano comparado al anterior modelo 
  estado_material: boolean;

  @Column({ name: 'FECHA_LANZAMIENTO', type: 'date', nullable: true })
  fecha_lanzamiento: Date;

  @Column({ name: 'TIPO', type: 'nvarchar', length: 50 })
  tipo: string;

  @Column({ name: 'IDIOMA', type: 'nvarchar', length: 50, nullable: true })
  idioma: string;

  @Column({ name: 'ORGANIZACION', type: 'nvarchar', length: 50, nullable: true })
  organizacion: string;

  @Column({ name: 'ACRONIMO', type: 'nvarchar', length: 50, nullable: true })
  acronimo: string;

  @Column({ name: 'VER_PLATAFORMA', type: 'nvarchar', length: 50, nullable: true })
  ver_plataforma: string;

  @Column({ name: 'VER_MATERIAL', type: 'nvarchar', length: 50, nullable: true })
  ver_material: string;
  
  @Column({ name: 'CATEGORIA', type: 'nvarchar', length: 100, nullable: true })
  categoria: string;

  @OneToMany(() => Grupo, (grupo) => grupo.curso)
  grupos: Grupo[];
}
