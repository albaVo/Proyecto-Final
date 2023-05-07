import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedore } from './entities/proveedore.entity';
import { DataSource, Repository } from 'typeorm';
import { SubcategoriasService } from '../subcategorias/subcategorias.service';

@Injectable()
export class ProveedoresService {

  private readonly logger = new Logger('ProveedoresService')

  constructor(
    private readonly dataSource: DataSource,

    @InjectRepository(Proveedore)
    private readonly proveedorRepository: Repository<Proveedore>,
    private readonly subcategoriaService: SubcategoriasService
  ){}

  async create(createProveedoreDto: CreateProveedoreDto) {
    try {
      const { subcategoriaId, ...campos } = createProveedoreDto

      const subcategoria = this.subcategoriaService.findOne(subcategoriaId)
      const proveedor = this.proveedorRepository.create({...campos})
      proveedor.subcategoria = await this.subcategoriaService.findOne(subcategoriaId)

      await this.proveedorRepository.save(proveedor)
      return proveedor
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.proveedorRepository.find({});
  }

  findOne(id: number) {
    return this.proveedorRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    const proveedor = await this.findOne(id)
    if (!proveedor) {
      throw new Error(`Proveedor con id ${id} no encontrado`)
    }

    const subcategoria = await this.subcategoriaService.findOne(updateProveedoreDto.subcategoriaId);
    if (!subcategoria) {
      throw new NotFoundException(`La subcategoria con el ID ${updateProveedoreDto.subcategoriaId} no existe`);
    }

    proveedor.subcategoria = subcategoria

    proveedor.nombre = updateProveedoreDto.nombre
    proveedor.email = updateProveedoreDto.email
    proveedor.telefono = updateProveedoreDto.telefono
    proveedor.direccion = updateProveedoreDto.direccion
    proveedor.ciudad = updateProveedoreDto.ciudad
    proveedor.codigo_postal = updateProveedoreDto.codigo_postal

    await this.proveedorRepository.save(proveedor)

    return proveedor
  }

  async remove(id: number) {
    const proveedor = await this.findOne(id)
    await this.proveedorRepository.remove(proveedor)

    return `Proveedor eliminado con éxito`
  }

  async deleteAllProveedores() {
    const query = this.proveedorRepository.createQueryBuilder('proveedor')
    try {
      return await query
      .delete()
      .where({})
      .execute()
    } catch (error) {
      this.handleDBErrors(error)
    }
  } 

  private handleDBErrors(error: any): never {
    if (error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Please Check Server Error ...');
  }
}
