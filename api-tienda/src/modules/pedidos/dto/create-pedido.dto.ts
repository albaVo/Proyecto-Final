import { IsArray, IsDate, IsNumber } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class CreatePedidoDto {
    @CreateDateColumn()
    fecha_pedido: Date;

    @IsNumber()
    precio_total: number;


    // RELACIONES
    @IsNumber()
    direccionId: number

    @IsNumber()
    usuarioId: number

    @IsArray()
    @IsNumber({}, { each: true })
    productosId: number[]
}
