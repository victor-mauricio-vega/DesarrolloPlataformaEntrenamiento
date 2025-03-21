import { Check, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn('increment', {
    primaryKeyConstraintName: 'pk_administrador',
    comment: 'Clave primaria de la tabla Administrador',
  })
  pk_administrador: number;
  @Column({ type: 'nvarchar', length: 50, comment: 'Nombre del Administrador' })
  nombre: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    comment: 'Apellido del Administrador',
  })
  apellido: string;
  @Column({
    type: 'nvarchar',
    length: 100,
    comment: 'Correo del Administrador',
  })
  correo: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    comment: 'Usuario de la cuenta Agol del Administrador',
  })
  usuario: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    default: 'Deshabilitado',
    comment:
      "Si el Estado es 'Habilitado' podra acceder a todas las funcionalidades de un Administrador",
  })
  @Check(
    'CHK_ESTADO_ADMINISTRADOR',
    "estado='Habilitado' OR estado='Deshabilitado'",
  )
  estado: string;
}
