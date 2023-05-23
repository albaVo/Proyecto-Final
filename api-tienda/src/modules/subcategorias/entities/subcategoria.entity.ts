import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Producto } from "src/modules/productos/entities/producto.entity";
import { Proveedore } from "src/modules/proveedores/entities/proveedore.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subcategoria {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    titulo: string
    
    @Column()
    icono: string


    // RELACIONES
    @ManyToOne(
        () => Categoria,
        (Categoria) => Categoria.subcategorias,
        { onDelete: 'CASCADE'}
    )
    categoria?: Categoria

    @OneToMany(
        () => Producto,
        (Producto) => Producto.subcategoria,
        { onDelete: 'CASCADE', eager: true}
    )
    productos?: Producto[]

    @OneToOne(
        () => Proveedore,
        (Proveedore) => Proveedore.subcategoria,
        {onDelete: 'CASCADE'}
    )
    proveedore?: Proveedore
}
