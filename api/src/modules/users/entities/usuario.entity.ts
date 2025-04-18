import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Check } from 'typeorm';
import { Pais } from '../../places/entities/pais.entity';
import { TipoDocumento } from '../../users/entities/tipoDocumento.entity';

@Entity('USUARIO')
export class Usuario {
  @PrimaryGeneratedColumn({ 
    name: 'PK_USUARIO',
    primaryKeyConstraintName: 'PK_USUARIO'
   })
  pk_usuario: number;

  @Column({ name: 'USUARIO', length: 60 })
  usuario: string;

  @Column({ name: 'CORREO', length: 100 })
  correo: string;

  @Column({ name: 'NOMBRE', length: 50 })
  nombre: string;

  @Column({ name: 'APELLIDO', length: 50 })
  apellido: string;

  @ManyToOne(() => TipoDocumento, { nullable: false })
  @JoinColumn({ 
    name: 'TIPO_DOC', 
    referencedColumnName: 'pk_tipo_documento',
    foreignKeyConstraintName: 'FK_USUARIO_TIPO_DOCUMENTO'})
  tipoDocumento: TipoDocumento;
  
 // @Check('CK_DOCUMENTO_IDENTIDAD_USUARIO', "[DOCUMENTO_IDENTIDAD]='0' OR len([DOCUMENTO_IDENTIDAD]) >= 6 AND len([DOCUMENTO_IDENTIDAD]) <= 15")
  @Column({ name: 'DOCUMENTO_IDENTIDAD', length: 255 })
  documentoIdentidad: string;

  //@Check('CK_NUM_CONTACTO_USUARIO', "[NUM_CONTACTO] IS NULL OR len([NUM_CONTACTO]) >= 7")
  @Column({ name: 'NUM_CONTACTO', length: 50 })
  numContacto: string;

  @ManyToOne(() => Pais, pais => pais.usuarios, { nullable: false })
  @JoinColumn({ name: 'FK_PAIS',
    referencedColumnName: 'pk_pais',
    foreignKeyConstraintName: 'FK_USUARIO_PAIS',
   })
  pais: Pais;
}
