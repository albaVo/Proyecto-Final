import { Usuario } from "src/modules/auth/entities/usuario.entity";
import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Valoracione {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('numeric')
    puntuacion: number;

    @Column('text')
    comentario: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    fecha_valoracion: Date


    // RELACIONES
    @ManyToOne(
        () => Producto,
        (Producto) => Producto.valoraciones,
        { onDelete: 'CASCADE'}
    )
    producto?: Producto

    @ManyToOne(
        () => Usuario,
        (Usuario) => Usuario.valoraciones,
        {onDelete: 'CASCADE'}
    )
    usuario?: Usuario
}
