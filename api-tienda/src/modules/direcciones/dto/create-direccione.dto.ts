import { IsNumber, IsNumberString, IsString, Length, MinLength, maxLength } from "class-validator";

export class CreateDireccioneDto {
    @IsString()
    @MinLength(1)
    titulo: string;

    @IsString()
    @MinLength(1)
    direccion: string;

    @IsString()
    @MinLength(1)
    ciudad: string;

    @IsNumber()
    codigo_postal: number;

    @IsNumber()
    telefono: number;


    // RELACIONES
    @IsNumber()
    usuarioId: number
}