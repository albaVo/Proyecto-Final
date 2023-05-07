import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionesModule } from './modules/direcciones/direcciones.module';
import { ValoracionesModule } from './modules/valoraciones/valoraciones.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { ProductosModule } from './modules/productos/productos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { SubcategoriasModule } from './modules/subcategorias/subcategorias.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { AuthModule } from './modules/auth/auth.module';
import { SeedModule } from './modules/seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    DireccionesModule,
    ValoracionesModule,
    PedidosModule,
    ProductosModule,
    CategoriasModule,
    SubcategoriasModule,
    ProveedoresModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
