import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsNumber, IsArray, IsOptional } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @CreateDateColumn()
    @IsOptional()
    readonly fecha_pedido?: Date;

    @IsNumber()
    @IsOptional()
    readonly precio_total?: number;


    // RELACIONES
    @IsNumber()
    @IsOptional()
    readonly direccionId?: number

    @IsNumber()
    @IsOptional()
    readonly usuarioId?: number

    @IsArray()
    @IsNumber({}, { each: true })
    @IsOptional()
    readonly productosId?: number[]
}
