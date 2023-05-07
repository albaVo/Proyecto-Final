import { IsIn, IsNumber, IsString, MinLength } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class CreateValoracioneDto {
    @IsNumber()
    @IsIn([1, 2, 3, 4, 5])
    puntuacion: number
    
    @IsString()
    @MinLength(1)
    comentario: string

    @CreateDateColumn()
    fecha_valoracion: Date;


    // RELACIONES
    @IsNumber()
    productoId: number

    @IsNumber()
    usuarioId: number
}
