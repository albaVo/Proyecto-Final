import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsString, MinLength, IsOptional, IsIn, IsArray, IsNumber } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly titulo?: string

    @IsOptional()
    @IsIn(['Acción y adventura', 'Deportes', 'Estrategia', 'Simulación', 'Plataformas', 'Realidad Virtual'])
    readonly genero?: string

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly descripcion?: string

    @IsOptional()
    @IsString()
    readonly imagen?: string

    @IsOptional()
    @IsString()
    readonly fondo?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    readonly capturas?: string[]

    @IsOptional()
    @IsString()
    readonly video?: string

    @IsNumber()
    @IsOptional()
    readonly precio?: number

    @IsOptional()
    @IsNumber()
    readonly descuento?: number

    @IsNumber()
    @IsOptional()
    readonly stock?: number;


    // RELACIONES
    @IsNumber()
    @IsOptional()
    readonly categoriaId?: number

    @IsNumber()
    @IsOptional()
    readonly subcategoriaId?: number
}
