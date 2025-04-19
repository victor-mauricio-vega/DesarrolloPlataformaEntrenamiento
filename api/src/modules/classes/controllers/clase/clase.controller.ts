// src/clases/clase.controller.ts
import {
    Controller, Get, Param, Req, ParseIntPipe,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { ClaseService } from '../../services/clase/clase.service';
  import { ListarCapacitacionesDto } from '../../dtos/listarCapacitaciones.dto';
  
  @Controller('estudiante')            // prefijo de la ruta
  export class ClaseController {
    constructor(private readonly claseService: ClaseService) {}
  
    /**
     * 1.  GET /clases/estudiante/:id
     *     Devuelve las capacitaciones de cualquier estudiante
     */
    @Get('clases/:documento')
  async listarPorDocumento(
    @Param('documento') documento: string,
  ): Promise<ListarCapacitacionesDto[]> {
    return this.claseService.listarCursosPorDocumento(documento);
  }

  }
  