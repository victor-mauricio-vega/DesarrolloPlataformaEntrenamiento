import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly apellido: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly doc_identidad: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly correo: string;

  @IsString()
  @IsEmpty()
  @ApiProperty()
  readonly num_contacto: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly registrado: boolean;
}

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
