import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateValoracioneDto } from './dto/create-valoracione.dto';
import { UpdateValoracioneDto } from './dto/update-valoracione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Valoracione } from './entities/valoracione.entity';
import { DataSource, Repository } from 'typeorm';
import { ProductosService } from '../productos/productos.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ValoracionesService {

  private readonly logger = new Logger('ValoracionesService')

  constructor(
    private readonly dataSource: DataSource,

    @InjectRepository(Valoracione)
    private readonly valoracionRepository: Repository<Valoracione>,
    private readonly productosService: ProductosService,
    private readonly usuariosService: AuthService
  ){}

  async create(createValoracioneDto: CreateValoracioneDto) {
    try {
      const { productoId, usuarioId, ...campos } = createValoracioneDto

      const producto = this.productosService.findOne(productoId)
      const usuario = this.usuariosService.findOne(usuarioId)
      const valoracion = this.valoracionRepository.create({...campos})
      valoracion.producto = await this.productosService.findOne(productoId)
      valoracion.usuario = await this.usuariosService.findOne(usuarioId)

      await this.valoracionRepository.save(valoracion)
      return valoracion
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.valoracionRepository.find({})
  }

  findOne(id: number) {
    return this.valoracionRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateValoracioneDto: UpdateValoracioneDto) {
    return `This action updates a #${id} valoracione`;
  }

  async remove(id: number) {
    const valoracion = await this.findOne(id)
    await this.valoracionRepository.remove(valoracion)

    return `Valoración eliminada con éxito`
  }
}
