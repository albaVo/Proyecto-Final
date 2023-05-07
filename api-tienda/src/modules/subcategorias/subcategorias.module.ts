import { Module } from '@nestjs/common';
import { SubcategoriasService } from './subcategorias.service';
import { SubcategoriasController } from './subcategorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategoria } from './entities/subcategoria.entity';
import { CategoriasModule } from '../categorias/categorias.module';

@Module({
  controllers: [SubcategoriasController],
  providers: [SubcategoriasService],
  imports: [
    CategoriasModule,
    TypeOrmModule.forFeature([Subcategoria])
  ],
  exports: [SubcategoriasService]
})
export class SubcategoriasModule {}
