// src/clases/clase.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from '../../entities/clase.entity';
import { ListarCapacitacionesDto } from '../../dtos/listarCapacitaciones.dto';

@Injectable()
export class ClaseService {
  constructor(
    @InjectRepository(Clase)
    private readonly claseRepo: Repository<Clase>,
  ) {}

  /**
   * Devuelve, para un estudiante dado, el nombre del curso,
   * el tipo de grupo y la fecha de finalización del grupo.
   */
  async listarCursosPorEstudiante(
    estudianteId: number,
  ): Promise<ListarCapacitacionesDto[]> {
    return this.claseRepo
      .createQueryBuilder('clase')
      .innerJoin('clase.grupo', 'grupo')          // FK a GRUPO
      .innerJoin('grupo.curso', 'curso')         // FK a CURSO
      .leftJoin('grupo.tipoGrupo', 'tg')         // FK opcional a TIPO_GRUPO
      .where('clase.pfk_estudiante = :estudianteId', { estudianteId })
      .select([
        'curso.nombre                AS "nombreCurso"',
        'COALESCE(tg.nombre, grupo.tipo) AS "tipoGrupo"', // usa TIPO_GRUPO o la columna grupo.tipo
        'grupo.fecha_fin             AS "fechaFin"',
      ])
      .orderBy('grupo.fecha_fin', 'DESC')        // opcional
      .getRawMany<ListarCapacitacionesDto>();            // solo los campos seleccionados
  }
}
