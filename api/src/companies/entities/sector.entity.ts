import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Empresa } from './empresa.entity';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn({ comment: 'Clave primaria del Sector' })
  pk_sector: number;
  @Column({ type: 'nvarchar', length: 100, comment: 'Nombre del Sector' })
  nombre: string;

  @OneToMany(() => Empresa, (empresa) => empresa.sector)
  empresas: Empresa[];
}
