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
 // clase.service.ts
async listarCursosPorDocumento(
    documentoIdentidad: string,
  ): Promise<ListarCapacitacionesDto[]> {
    return this.claseRepo
      .createQueryBuilder('clase')
      .innerJoin('clase.grupo', 'grupo')
      .innerJoin('grupo.curso', 'curso')
      .leftJoin('grupo.tipoGrupo', 'tg')
      .innerJoin('clase.estudiante', 'estudiante')
      .innerJoin('estudiante.usuario', 'usuario')
      .where('usuario.DOCUMENTO_IDENTIDAD = :documento', { documento: documentoIdentidad })
      .select([
        'curso.NOMBRE                      AS nombreCurso',
        'ISNULL(tg.NOMBRE, grupo.TIPO)    AS tipoGrupo',
        'grupo.FECHA_FIN                  AS fechaFin',
      ])
      .orderBy('grupo.FECHA_FIN', 'DESC')
      .getRawMany<ListarCapacitacionesDto>();
  }
  
}
