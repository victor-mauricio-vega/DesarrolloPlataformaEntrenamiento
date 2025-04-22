// src/dtos/listarCapacitaciones.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ListarCapacitacionesDto {
  @ApiProperty({
    description: 'Nombre del curso',
    example: 'Curso de SIG',
  })
  nombreCurso: string;

  @ApiProperty({
    description: 'Tipo de grupo (puede ser null si no aplica)',
    example: 'Masterclass',
    nullable: true,
  })
  tipoGrupo: string | null;

  @ApiProperty({
    description: 'Fecha de finalización en formato ISO 8601',
    example: '2024-06-30T05:00:00.000Z',
    type: String,
    format: 'date-time',
  })
  fechaFin: Date;
}
