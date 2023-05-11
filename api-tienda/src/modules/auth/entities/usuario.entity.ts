import { Direccione } from "src/modules/direcciones/entities/direccione.entity";
import { Pedido } from "src/modules/pedidos/entities/pedido.entity";
import { Valoracione } from "src/modules/valoraciones/entities/valoracione.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text', { unique: true })
    nombre: string;

    @Column('text', { unique: true })
    apellidos: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text')
    contraseña?: string

    @Column('bool', {default: true})
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['usuario']
    })
    roles: string[];

    
    // RELACIONES
    @OneToMany(
        () => Direccione,
        (Direccione) => Direccione.usuario,
        {onDelete: 'CASCADE'}
    )
    direcciones?: Direccione[]

    @OneToMany(
        () => Valoracione,
        (Valoracione) => Valoracione.usuario,
        {onDelete: 'CASCADE'}
    )
    valoraciones?: Valoracione[]

    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.usuario,
        {onDelete: 'CASCADE'}
    )
    pedidos?: Pedido[]
}