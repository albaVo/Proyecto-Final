import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>
  ){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      const categoria = this.categoriaRepository.create(createCategoriaDto)
      await this.categoriaRepository.save(categoria)
      return categoria
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.categoriaRepository.find({})
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id)
    if (!categoria) {
      throw new Error(`Categoria con id ${id} no encontrada`)
    }

    // aplicar los cambios del DTO
    categoria.titulo = updateCategoriaDto.titulo
    categoria.icono = updateCategoriaDto.icono


    await this.categoriaRepository.save(categoria)

    return categoria
  }

  async remove(id: number) {
    const categoria = await this.findOne(id)
    await this.categoriaRepository.remove(categoria)

    return `Categoria eliminada con éxito`
  }
}
