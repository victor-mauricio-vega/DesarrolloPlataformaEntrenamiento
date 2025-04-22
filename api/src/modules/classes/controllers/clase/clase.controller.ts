// src/clases/clase.controller.ts
import {
    Controller,
    Get,
    Param,
  } from '@nestjs/common';
  import {
    ApiTags,
    ApiOperation,
    ApiParam,
    ApiOkResponse,
  } from '@nestjs/swagger';
  
  import { ClaseService } from '../../services/clase/clase.service';
  import { ListarCapacitacionesDto } from '../../dtos/listarCapacitaciones.dto';
  
  @ApiTags('Capacitaciones') // Agrupa estas rutas bajo la pestaña “Capacitaciones”
  @Controller('estudiante')
  export class ClaseController {
    constructor(private readonly claseService: ClaseService) {}
  
    /**
     * GET /estudiante/clases/:documento
     * Devuelve las capacitaciones de cualquier estudiante
     */
    @Get('clases/:documento')
    @ApiOperation({
      summary: 'Listar capacitaciones de un estudiante',
      description:
        'Obtiene todas las capacitaciones asociadas al estudiante identificado por su número de documento.',
    })
    @ApiParam({
      name: 'documento',
      type: String,
      description: 'Número de documento del estudiante',
      example: '1022334455',
    })
    @ApiOkResponse({
      description: 'Arreglo de objetos con la información de las capacitaciones',
      type: ListarCapacitacionesDto,
      isArray: true,
    })
    async listarPorDocumento(
      @Param('documento') documento: string,
    ): Promise<ListarCapacitacionesDto[]> {
      return this.claseService.listarCursosPorDocumento(documento);
    }
  }
  