import { Transform, TransformFnParams } from "class-transformer";
import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Pedido } from "src/modules/pedidos/entities/pedido.entity";
import { Subcategoria } from "src/modules/subcategorias/entities/subcategoria.entity";
import { Valoracione } from "src/modules/valoraciones/entities/valoracione.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    titulo: string

    @Column({nullable: true})
    genero?: string

    @Column('text')
    descripcion: string

    @Column({ nullable: true })
    imagen?: string
    
    // @Column({ nullable: true })
    // portada?: string

    @Column({ nullable: true })
    fondo?: string
    
    @Column({ type: 'simple-array', nullable: true })
    capturas?: string[];


    @Column({ nullable: true })
    video?: string

    @Column('numeric')
    precio: number;


    @Column({ nullable: true })
    descuento?: number;

    @Column('numeric')
    stock: number;


    // RELACIONES
    @ManyToOne(
        () => Categoria,
        (Categoria) => Categoria.productos,
        { onDelete: 'CASCADE'}
    )
    categoria?: Categoria

    @ManyToOne(
        () => Subcategoria,
        (Subcategoria) => Subcategoria.productos,
        { onDelete: 'CASCADE'}
    )
    subcategoria?: Subcategoria

    @OneToMany(
        () => Valoracione,
        (Valoracione) => Valoracione.producto,
        {onDelete: 'CASCADE', eager: true}
    )
    valoraciones?: Valoracione[]

    @ManyToMany(
        () => Pedido,
        (pedido) => pedido.productos,
        { onDelete: 'CASCADE' }
    )
    pedidos: Pedido[]
}
