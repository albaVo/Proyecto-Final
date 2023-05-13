import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly nombre?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly apellidos?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    readonly email?: string;
  
    @IsString()
    @MinLength(6)
    @MaxLength(60)
    @IsOptional()
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener una letra MAYÚSCULA, minúscula y un número'
    })
    readonly contraseña?: string;
}


