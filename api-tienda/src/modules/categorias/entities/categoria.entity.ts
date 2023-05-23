import { Producto } from "src/modules/productos/entities/producto.entity";
import { Subcategoria } from "src/modules/subcategorias/entities/subcategoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text', {unique: true})
    titulo: string
    
    @Column()
    icono: string


    // RELACIONES

    @OneToMany(
        () => Subcategoria,
        (Subcategoria) => Subcategoria.categoria,
        { onDelete: 'CASCADE', eager: true }
    )
    subcategorias?: Subcategoria[]

    @OneToMany(
        () => Producto,
        (Producto) => Producto.categoria,
        { onDelete: 'CASCADE', eager: true}
    )
    productos?: Producto[]
}
