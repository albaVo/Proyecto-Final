import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccioneDto } from './create-direccione.dto';
import { IsString, MinLength, IsNumber, IsOptional } from 'class-validator';

export class UpdateDireccioneDto extends PartialType(CreateDireccioneDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly titulo?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly direccion?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly ciudad?: string;

    @IsNumber()
    @IsOptional()
    readonly codigo_postal?: number;

    @IsNumber()
    @IsOptional()
    readonly telefono?: number;


    // RELACIONES
    @IsNumber()
    readonly usuarioId?: number
}
