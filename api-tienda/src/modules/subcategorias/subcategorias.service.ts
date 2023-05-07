import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategoria } from './entities/subcategoria.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../categorias/entities/categoria.entity';
import { CategoriasService } from '../categorias/categorias.service';

@Injectable()
export class SubcategoriasService {

  constructor(
    @InjectRepository(Subcategoria)
    private readonly subcategoriaRepository: Repository<Subcategoria>,
    private readonly categoriaService: CategoriasService
  ){}

  async create(createSubcategoriaDto: CreateSubcategoriaDto) {
    try {
      const { categoriaId, ...campos } = createSubcategoriaDto     
      
      const categoria = this.categoriaService.findOne(categoriaId)
      const subcategoria = this.subcategoriaRepository.create({...campos})
      subcategoria.categoria = await this.categoriaService.findOne(categoriaId)

      await this.subcategoriaRepository.save(subcategoria)
      return subcategoria

    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.subcategoriaRepository.find({
      relations: {categoria: true}
    })
  }

  findOne(id: number) {
    return this.subcategoriaRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateSubcategoriaDto: UpdateSubcategoriaDto) {
    const subcategoria = await this.findOne(id)
    if (!subcategoria) {
      throw new Error(`Subcategoria con id ${id} no encontrada`)
    }

    const categoria = await this.categoriaService.findOne(updateSubcategoriaDto.categoriaId);
    if (!categoria) {
      throw new NotFoundException(`La subcategoria con el ID ${updateSubcategoriaDto.categoriaId} no existe`);
    }

    subcategoria.categoria = categoria

    subcategoria.titulo = updateSubcategoriaDto.titulo
    subcategoria.icono = updateSubcategoriaDto.icono

    await this.subcategoriaRepository.save(subcategoria)

    return subcategoria
  }

  async remove(id: number) {
    const subcategoria = await this.findOne(id)
    await this.subcategoriaRepository.remove(subcategoria)

    return `Subcategoria eliminada con éxito`
  }
}
