import { Usuario } from "src/modules/auth/entities/usuario.entity";
import { Direccione } from "src/modules/direcciones/entities/direccione.entity";
import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    fecha_pedido: Date

    @Column('numeric')
    precio_total: number;


    // RELACIONES
    @ManyToOne(
        () => Direccione,
        (Direccione) => Direccione.pedidos,
        { onDelete: 'CASCADE'}
    )
    direccion?: Direccione

    @ManyToOne(
        () => Usuario,
        (Usuario) => Usuario.pedidos,
        {onDelete: 'CASCADE'}
    )
    usuario: Usuario

    @ManyToMany(
        () => Producto,
        (producto) => producto.pedidos,
        { onDelete: 'CASCADE' }
    )
    @JoinTable({
        name: 'pedidos_productos',
        joinColumn: {
            name: 'pedidoId',
        },
        inverseJoinColumn: {
            name: 'productosId',
        }
    })
    productos: Producto[]
}
