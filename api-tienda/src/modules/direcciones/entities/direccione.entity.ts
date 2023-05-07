import { Usuario } from "src/modules/auth/entities/usuario.entity"
import { Pedido } from "src/modules/pedidos/entities/pedido.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Direccione {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    titulo: string

    @Column('text', {unique: true})
    direccion: string

    @Column('text')
    ciudad: string

    @Column('numeric')
    codigo_postal: number;

    @Column('numeric', {unique: true})
    telefono: number


    // RELACIONES
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.direccion,
        { onDelete: 'CASCADE' }
    )
    pedidos?: Pedido[]

    @ManyToOne(
        () => Usuario,
        (Usuario) => Usuario.direcciones,
        {onDelete: 'CASCADE'}
    )
    usuario?: Usuario
}
