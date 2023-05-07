import { Module } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { ValoracionesController } from './valoraciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracione } from './entities/valoracione.entity';
import { ProductosModule } from '../productos/productos.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ValoracionesController],
  providers: [ValoracionesService],
  imports: [
    TypeOrmModule.forFeature([Valoracione]),
    ProductosModule,
    AuthModule
  ]
})
export class ValoracionesModule {}
