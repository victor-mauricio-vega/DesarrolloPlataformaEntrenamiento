import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Grupo } from './grupo.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  pk_curso: number;
  @Column({ type: 'nvarchar', length: 50 })
  sigla: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;
  @Column({ type: 'int' })
  intensidad: number;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado_material: string;
  @Column({ type: 'date', nullable: true })
  fecha_lanzamiento: Date;
  @Column({ type: 'nvarchar', length: 50 })
  tipo: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  idioma: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  organizacion: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  acronimo: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  ver_plataforma: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  ver_material: string;
  @Column({ type: 'nvarchar', length: 100, nullable: true })
  categoria: string;

  @OneToMany(() => Grupo, (grupo) => grupo.curso)
  grupos: Grupo[];
}
