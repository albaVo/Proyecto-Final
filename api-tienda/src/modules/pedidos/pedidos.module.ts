import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { DireccionesModule } from '../direcciones/direcciones.module';
import { Producto } from '../productos/entities/producto.entity';
import { AuthModule } from '../auth/auth.module';
import { ProveedoresModule } from '../proveedores/proveedores.module';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports: [
    TypeOrmModule.forFeature([Pedido, Producto]),
    DireccionesModule,
    AuthModule,
    ProveedoresModule
  ]
})
export class PedidosModule {}
