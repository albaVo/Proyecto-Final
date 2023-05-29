import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccione } from './entities/direccione.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DireccionesService {

  constructor(
    @InjectRepository(Direccione)
    private readonly direccionRepository: Repository<Direccione>,
    private readonly usuariosService: AuthService
  ){}

  async create(createDireccioneDto: CreateDireccioneDto) {
    try {
      const { usuarioId, ...campos } = createDireccioneDto

      const usuario = this.usuariosService.findOne(usuarioId)
      const direccion = this.direccionRepository.create({...campos})
      direccion.usuario = await this.usuariosService.findOne(usuarioId)

      await this.direccionRepository.save(direccion)
      return direccion
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.direccionRepository.find({
      relations: {usuario: true}
    });
  }

  findOne(id: number) {
    return this.direccionRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateDireccioneDto: UpdateDireccioneDto) {
    const direccion = await this.findOne(id)
    if (!direccion) {
      throw new Error(`Dirección con id ${id} no encontrada`)
    }

    const usuario = await this.usuariosService.findOne(updateDireccioneDto.usuarioId);
    if (!usuario) {
      throw new NotFoundException(`El usuario con el ID ${updateDireccioneDto.usuarioId} no existe`);
    }

    direccion.usuario = usuario

    // aplicar los cambios del DTO
    direccion.titulo = updateDireccioneDto.titulo
    direccion.direccion = updateDireccioneDto.direccion
    direccion.ciudad = updateDireccioneDto.ciudad
    direccion.codigo_postal = updateDireccioneDto.codigo_postal
    direccion.telefono = updateDireccioneDto.telefono

    await this.direccionRepository.save(direccion)

    return direccion
  }

  async remove(id: number) {
    const direccion = await this.findOne(id)
    await this.direccionRepository.remove(direccion)

    return `Dirección eliminada con éxito`
  }
}
