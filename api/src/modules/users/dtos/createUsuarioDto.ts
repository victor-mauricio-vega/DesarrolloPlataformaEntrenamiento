import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 60)
  usuario: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  apellido: string;

  @IsString()
  @IsNotEmpty()
  documentoIdentidad: string;

  @IsString()
  @Length(7, 50)
  numContacto: string;

  @IsString()
  @IsNotEmpty()
  tipoDocumentoId: string;

  @IsNotEmpty()
  fkPais: string;
}
