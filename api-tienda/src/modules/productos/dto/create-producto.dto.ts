import { IsArray, IsIn, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @MinLength(1)
    titulo: string

    @IsOptional()
    @IsIn(['Acción y adventura', 'Deportes', 'Estrategia', 'Simulación', 'Plataformas', 'Realidad Virtual'])
    genero?: string

    @IsString()
    @MinLength(1)
    descripcion: string

    @IsOptional()
    @IsString()
    imagen?: string

    @IsOptional()
    @IsString()
    fondo?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    capturas?: string[]

    @IsOptional()
    @IsString()
    video?: string

    @IsNumber()
    precio: number

    @IsOptional()
    @IsNumber()
    descuento?: number

    @IsNumber()
    stock: number;


    // RELACIONES
    @IsNumber()
    categoriaId: number

    @IsNumber()
    subcategoriaId: number
}
