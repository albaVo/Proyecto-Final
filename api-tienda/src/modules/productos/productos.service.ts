import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CategoriasService } from '../categorias/categorias.service';
import { SubcategoriasService } from '../subcategorias/subcategorias.service';

@Injectable()
export class ProductosService {

  private readonly logger = new Logger('ProveedoresService')
  
  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriasService: CategoriasService,
    private readonly subcategoriaService: SubcategoriasService
  ){}

  async create(createProductoDto: CreateProductoDto) {
    try {
      const { categoriaId, subcategoriaId, ...campos } = createProductoDto

      const categoria = this.categoriasService.findOne(categoriaId)
      const subcategoria = this.subcategoriaService.findOne(subcategoriaId)
      const producto = this.productoRepository.create({...campos})
      producto.categoria = await this.categoriasService.findOne(categoriaId)
      producto.subcategoria = await this.subcategoriaService.findOne(subcategoriaId)
      // producto.subcategoria = subcategoria[0]

      await this.productoRepository.save(producto)
      return producto
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.productoRepository.find({});
  }

  findOne(id: number) {
    return this.productoRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id)
    if(!producto) {
      throw new Error(`Producto con id ${id} no encontrado`)
    }

    const categoria = await this.categoriasService.findOne(updateProductoDto.categoriaId)
    if (!categoria) {
      throw new NotFoundException(`La categoria con el ID ${updateProductoDto.categoriaId} no existe`);
    }

    const subcategoria = await this.subcategoriaService.findOne(updateProductoDto.subcategoriaId)
    if (!subcategoria) {
      throw new NotFoundException(`La subcategoria con el ID ${updateProductoDto.subcategoriaId} no existe`);
    }

    producto.categoria = categoria
    producto.subcategoria = subcategoria

    producto.titulo = updateProductoDto.titulo
    producto.genero = updateProductoDto.genero
    producto.descripcion = updateProductoDto.descripcion
    producto.imagen = updateProductoDto.imagen
    producto.fondo = updateProductoDto.fondo
    producto.capturas = updateProductoDto.capturas
    producto.video = updateProductoDto.video
    producto.precio = updateProductoDto.precio
    producto.descuento = updateProductoDto.descuento
    producto.stock = updateProductoDto.stock
    
    await this.productoRepository.save(producto)

    return producto
  }

  async remove(id: number) {
    const producto = await this.findOne(id)
    await this.productoRepository.remove(producto)

    return `Producto eliminado con éxito`
  }

  async deleteAllProductos() {
    const query = this.productoRepository.createQueryBuilder('producto')
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
