import { Subcategoria } from "src/modules/subcategorias/entities/subcategoria.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedore {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text', {unique: true})
    nombre: string

    @Column('text', {unique: true})
    email: string

    @Column('numeric', {unique: true})
    telefono: number

    @Column('text', {unique: true})
    direccion: string

    @Column()
    ciudad: string

    @Column('numeric')
    codigo_postal: number


    // RELACIONES
    @OneToOne(
        () => Subcategoria,
        (Subcategoria) => Subcategoria.proveedore,
        {onDelete: 'CASCADE', eager: true}
    )
    @JoinColumn()
    subcategoria?: Subcategoria
}
