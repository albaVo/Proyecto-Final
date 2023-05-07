import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly titulo?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly icono?: string;
}
