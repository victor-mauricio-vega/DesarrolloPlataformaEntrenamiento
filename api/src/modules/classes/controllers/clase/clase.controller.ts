// src/clases/clase.controller.ts
import {
    Controller, Get, Param, Req, ParseIntPipe,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { ClaseService } from '../../services/clase/clase.service';
  import { ListarCapacitacionesDto } from '../../dtos/listarCapacitaciones.dto';
  
  @Controller('clases')            // prefijo de la ruta
  export class ClaseController {
    constructor(private readonly claseService: ClaseService) {}
  
    /**
     * 1.  GET /clases/estudiante/:id
     *     Devuelve las capacitaciones de cualquier estudiante,
     *     útil para peticiones administrativas.
     */
    @Get('estudiante/:id')
    async listarPorEstudiante(
      @Param('id', ParseIntPipe) id: number,
    ): Promise<ListarCapacitacionesDto[]> {
      return this.claseService.listarCursosPorEstudiante(id);
    }
  
    /**
     * 2.  GET /clases/mias
     *     Devuelve las capacitaciones del estudiante autenticado.
     *     Requiere que tu estrategia de autenticación (JWT, sesión, etc.)
     *     añada `user` al objeto Request.
     */
    @Get('mias')
    async listarPropias(
      @Req() req: Request,
    ): Promise<ListarCapacitacionesDto[]> {
      const estudianteId = (req.user as any).id;     // adapta según tu guard
      return this.claseService.listarCursosPorEstudiante(estudianteId);
    }
  }
  