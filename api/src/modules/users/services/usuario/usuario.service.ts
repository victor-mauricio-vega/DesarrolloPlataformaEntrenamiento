// src/users/services/usuario.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';
import { TipoDocumento } from '../../entities/tipoDocumento.entity';
import { CreateUsuarioDto } from '../../dtos/createUsuarioDto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(TipoDocumento)
    private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const tipoDoc = await this.tipoDocumentoRepository.findOne({
      where: {
        id: dto.tipoDocumentoId,
        fk_pais: dto.fkPais,
      },
      relations: ['pais'],
    });

    if (!tipoDoc) {
      throw new BadRequestException('Tipo de documento no válido para el país seleccionado');
    }

    const regex = new RegExp(tipoDoc.expresion);
    if (!regex.test(dto.documentoIdentidad)) {
      throw new BadRequestException('Documento de identidad no cumple con el formato requerido');
    }

    const usuario = this.usuarioRepository.create({
      usuario: dto.usuario,
      correo: dto.correo,
      nombre: dto.nombre,
      apellido: dto.apellido,
      documentoIdentidad: dto.documentoIdentidad,
      numContacto: dto.numContacto,
      tipoDocumento: tipoDoc,
      pais: tipoDoc.pais,
    });

    return this.usuarioRepository.save(usuario);
  }
}
