//interfaces
import { GridProductos } from "@/components/shared"
import { IProducto } from "@/interfaces/IProductos"
//react
import { FC, useState } from "react"

interface Props {
    productos: IProducto[],
    title: any,
    cantidad: number,
    categoria?: number
}

export const RandomProducts:FC<Props> = ({productos, title, cantidad, categoria}) => {

    // Filtrar productos por categoría (si se proporciona)
    let filteredProducts = productos;
    if (categoria !== undefined) {
        filteredProducts = productos.filter((product) =>
          product.categoria.id === categoria
        );
    }

    // Seleccionar productos al azar
    const randomProducts: IProducto[] = [];
    for (let i = 0; i < cantidad; i++) {
        const randomProduct = filteredProducts[Math.floor(Math.random() * filteredProducts.length)];
        randomProducts.push(randomProduct);
    }

    // console.log('productos', productos)


    return (
        <div>
            <h2>{title}</h2>
            <GridProductos productos={randomProducts}/>
        </div>
    )
}