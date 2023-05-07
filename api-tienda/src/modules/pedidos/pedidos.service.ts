import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { DireccionesService } from '../direcciones/direcciones.service';
import { Producto } from '../productos/entities/producto.entity';
import { AuthService } from '../auth/auth.service';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class PedidosService {

  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    private readonly direccionService: DireccionesService,
    private readonly usuariosService: AuthService,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ){}

  async create(createPedidoDto: CreatePedidoDto) {
    try {
      const { usuarioId ,productosId, direccionId, ...campos } = createPedidoDto
      
      const usuario = this.usuariosService.findOne(usuarioId)
      const direccion = this.direccionService.findOne(direccionId)
      const pedido = this.pedidoRepository.create({
        ...campos,
        productos: productosId.map(producto => this.productoRepository.create({id: producto}))
      })
      pedido.direccion = await this.direccionService.findOne(direccionId)
      pedido.usuario = await this.usuariosService.findOne(usuarioId)

      await this.pedidoRepository.save(pedido)
      return pedido
    } 
    catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.pedidoRepository.find({
      relations: {
        direccion: true,
        productos: true
      }
    });
  }

  findOne(id: number) {
    return this.pedidoRepository.findOne({
      where: { id }
    });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    
  }

  async remove(id: number) {
    const pedido = await this.findOne(id)
    await this.pedidoRepository.remove(pedido)
  }
}
