import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedoreDto } from './create-proveedore.dto';
import { IsString, MinLength, IsNumber, IsOptional } from 'class-validator';

export class UpdateProveedoreDto extends PartialType(CreateProveedoreDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly nombre?: string

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly email?: string

    @IsNumber()
    @IsOptional()
    readonly telefono?: number;

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly direccion?: string
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly ciudad?: string

    @IsNumber()
    @IsOptional()
    readonly codigo_postal?: number;


    // RELACIONES 
    @IsNumber()
    @IsOptional()
    readonly subcategoriaId?: number
}
