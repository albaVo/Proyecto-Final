import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateProveedoreDto {
    @IsString()
    @MinLength(1)
    nombre: string

    @IsString()
    @MinLength(1)
    email: string

    @IsNumber()
    telefono: number;

    @IsString()
    @MinLength(1)
    direccion: string
    
    @IsString()
    @MinLength(1)
    ciudad: string

    @IsNumber()
    codigo_postal: number;


    // RELACIONES 
    @IsNumber()
    subcategoriaId: number
}
