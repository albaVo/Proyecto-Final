import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategoriaDto } from './create-subcategoria.dto';
import { IsString, MinLength, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSubcategoriaDto extends PartialType(CreateSubcategoriaDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly titulo?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly icono?: string;


    // RELACIONES
    @IsNumber()
    @IsOptional()
    readonly categoriaId?: number
}
