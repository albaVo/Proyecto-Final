import { IsString, MinLength, IsNotEmpty, IsNumber } from "class-validator";

export class CreateSubcategoriaDto {
    @IsString()
    @MinLength(1)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    icono: string;


    // RELACIONES
    @IsNumber()
    categoriaId: number
}
