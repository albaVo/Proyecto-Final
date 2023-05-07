import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProveedoresModule } from '../proveedores/proveedores.module';
import { ProductosModule } from '../productos/productos.module';
import { PedidosModule } from '../pedidos/pedidos.module';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProveedoresModule, ProductosModule, PedidosModule, ValoracionesModule]
})
export class SeedModule {}
