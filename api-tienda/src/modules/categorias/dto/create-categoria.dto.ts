import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCategoriaDto {
    @IsString()
    @MinLength(1)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    icono: string;
}
