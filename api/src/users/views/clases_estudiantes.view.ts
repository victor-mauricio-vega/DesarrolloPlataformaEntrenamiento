import { StringSchema } from 'joi';
import { Column, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: `SELECT
    dbo.GRUPO.PK_GRUPO AS GRUPO_ID, 
    dbo.ESTUDIANTE.DOC_IDENTIDAD AS ESTUDIANTE_DOC_IDENTIDAD, 
    dbo.ESTUDIANTE.NOMBRE AS ESTUDIANTE_NOMBRE, 
    dbo.ESTUDIANTE.APELLIDO AS ESTUDIANTE_APELLIDO, 
    dbo.ESTUDIANTE.CORREO AS ESTUDIANTE_CORREO, 
    dbo.ESTUDIANTE.NUM_CONTACTO AS ESTUDIANTE_NUM_CONTACTO, 
    dbo.EMPRESA.NOMBRE AS EMPRESA_NOMBRE, 
    dbo.CLASE.ESTADO_ENCUESTA AS CLASE_ESTADO_ENCUESTA, 
    dbo.CLASE.ESTADO_CERTIFICADO AS CLASE_ESTADO_CERTIFICADO, 
    dbo.CLASE.FECHA AS CLASE_FECHA, 
    dbo.CURSO.ESTADO_MATERIAL AS CURSO_ESTADO_MATERIAL, 
    dbo.CURSO.NOMBRE AS CURSO_NOMBRE, 
    dbo.CURSO.CATEGORIA AS CURSO_CATEGORIA, 
    dbo.SALON.NOMBRE AS SALON_NOMBRE, 
    dbo.GRUPO.FECHA_INICIO AS GRUPO_FECHA_INICIO, 
    dbo.GRUPO.FECHA_FIN AS GRUPO_FECHA_FIN, 
    dbo.INSTRUCTOR.NOMBRE AS INSTRUCTOR_NOMBRE, 
    dbo.INSTRUCTOR.APELLIDO AS INSTRUCTOR_APELLIDO, 
    dbo.INSTRUCTOR.TITULO AS INSTRUCTOR_TITULO, 
    dbo.INSTRUCTOR.DOC_IDENTIDAD AS INSTRUCTOR_DOC_IDENTIDAD, 
    dbo.CLASE.ESTADO_MATERIAL AS CLASE_ESTADO_MATERIAL, 
    dbo.CURSO.INTENSIDAD AS CURSO_INTENSIDAD, 
    dbo.CURSO.PK_CURSO AS CURSO_ID, 
    dbo.CURSO.SIGLA AS CURSO_SIGLA, pais.NOMBRE AS UBICACION_NOMBRE, 
    dbo.SALON.DIRECCION AS SALON_DIRECCION, 
    dbo.GRUPO.TIPO AS GRUPO_TIPO, 
    dbo.ESTUDIANTE.USUARIO AS ESTUDIANTE_USUARIO, 
    dbo.CLASE.ORDEN_VENTA AS CLASE_ORDEN_VENTA, 
    dbo.CLASE.PAIS_ORDEN_VENTA AS CLASE_PAIS_ORDEN_VENTA, 
    dbo.SECTOR.NOMBRE AS SECTOR_NOMBRE, 
    pais.NOMBRE AS UBICACION_PAIS, 
    dbo.CLASE.CALIFICACION AS CLASE_CALIFICACION
FROM     
    dbo.UBICACION AS pais 
INNER JOIN
    dbo.UBICACION ON pais.PK_UBICACION = pais.FK_PAIS 
INNER JOIN
    dbo.SALON ON pais.PK_UBICACION = dbo.SALON.FK_UBICACION 
INNER JOIN
    dbo.GRUPO ON dbo.SALON.PK_SALON = dbo.GRUPO.FK_SALON 
INNER JOIN
    dbo.CURSO ON dbo.CURSO.PK_CURSO = dbo.GRUPO.FK_CURSO 
INNER JOIN
    dbo.INSTRUCTOR ON dbo.INSTRUCTOR.PK_INSTRUCTOR = dbo.GRUPO.FK_INSTRUCTOR 
INNER JOIN
    dbo.CLASE ON dbo.GRUPO.PK_GRUPO = dbo.CLASE.PFK_GRUPO 
INNER JOIN
    dbo.EMPRESA ON dbo.EMPRESA.PK_EMPRESA = dbo.CLASE.FK_EMPRESA 
INNER JOIN
    dbo.ESTUDIANTE ON dbo.ESTUDIANTE.PK_ESTUDIANTE = dbo.CLASE.PFK_ESTUDIANTE 
LEFT OUTER JOIN
    dbo.SECTOR ON dbo.SECTOR.PK_SECTOR = dbo.EMPRESA.FK_SECTOR`,
})
export class View_Clases_Estudiantes {
  @Column({ type: 'nvarchar', length: 50 })
  clase_estado_encuesta: string;
  @Column({ type: 'nvarchar', length: 50 })
  clase_estado_certificado: string;
  @Column({ type: 'date' })
  clase_fecha: Date;
  @Column({ type: 'nvarchar', length: 50 })
  clase_orden_venta: string;
  @Column({ type: 'nvarchar', length: 50 })
  clase_pais_orden_venta: string;
  @Column('numeric', { precision: 5, scale: 2 })
  clase_calificacion: number;
  @Column({ type: 'nvarchar', length: 50 })
  clase_estado_material: string;
  @Column({ type: 'nvarchar', length: 50 })
  curso_estado_material: string;
  @Column({ type: 'nvarchar', length: 100 })
  curso_nombre: string;
  @Column({ type: 'nvarchar', length: 100 })
  curso_categoria: string;
  @Column({ type: 'int' })
  curso_intensidad: number;
  @Column({ type: 'int' })
  curso_id: number;
  @Column({ type: 'nvarchar', length: 50 })
  curso_sigla: string;
  @Column({ type: 'nvarchar', length: 50 })
  estudiante_nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  estudiante_apellido: string;
  @Column({ type: 'nvarchar', length: 20 })
  estudiante_doc_identidad: string;
  @Column({ type: 'nvarchar', length: 50 })
  estudiante_usuario: string;
  @Column({ type: 'nvarchar', length: 100 })
  estudiante_correo: string;
  @Column({ type: 'nvarchar', length: 50 })
  estudiante_num_contacto: string;
  @Column({ type: 'nvarchar', length: 100 })
  empresa_nombre: string;
  @Column({ type: 'int' })
  grupo_id: number;
  @Column({ type: 'date' })
  grupo_fecha_inicio: Date;
  @Column({ type: 'date' })
  grupo_fecha_fin: Date;
  @Column({ type: 'nvarchar', length: 50 })
  grupo_tipo: string;
  @Column({ type: 'nvarchar', length: 50 })
  instructor_nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  instructor_apellido: string;
  @Column({ type: 'nvarchar', length: 50 })
  instructor_titulo: string;
  @Column({ type: 'nvarchar', length: 20 })
  instructor_doc_identidad: string;
  @Column({ type: 'nvarchar', length: 100 })
  salon_nombre: string;
  @Column({ type: 'nvarchar', length: 100 })
  salon_direccion: string;
  @Column({ type: 'nvarchar', length: 100 })
  sector_nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  ubicacion_nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  ubicacion_pais: string;
}
