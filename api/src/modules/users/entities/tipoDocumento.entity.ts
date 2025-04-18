import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pais } from '../../places/entities/pais.entity';

@Entity('TIPO_DOCUMENTO')
export class TipoDocumento {
  @PrimaryColumn({ 
    name: 'PK_TIPO_DOCUMENTO',
    primaryKeyConstraintName: 'PK_TIPO_DOCUMENTO',})
  pk_tipo_documento: string;

  @Column({ name: 'EXPRESION' })
  expresion: string;

  @Column({ name: 'NOMBRE' })
  nombre: string;

  @Column({ name: 'FK_PAIS' })
  fk_pais: string;

  @ManyToOne(() => Pais, pais => pais.tiposDocumento)
  @JoinColumn({ name: 'FK_PAIS', referencedColumnName: 'pk_pais', foreignKeyConstraintName: 'FK_TIPO_DOCUMENTO_PAIS' })
  pais: Pais;
}
