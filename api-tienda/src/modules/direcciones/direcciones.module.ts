import { Module } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccione } from './entities/direccione.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [DireccionesController],
  providers: [DireccionesService],
  imports: [
    TypeOrmModule.forFeature([Direccione]),
    AuthModule
  ],
  exports: [DireccionesService]
})
export class DireccionesModule {}
