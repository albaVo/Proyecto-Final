//interfaces
import { GridProductos } from "@/components/shared"
import { IProducto } from "@/interfaces/IProductos"
//react
import { FC, useState } from "react"

interface Props {
    productos: IProducto[],
    title: any
}

export const RandomProducts:FC<Props> = ({productos, title}) => {
  
    //intentar poner pa que devuelva como máximo 9
    const randomProduct = productos[Math.floor(Math.random() * productos.length)]
    // console.log(randomProduct);
  
    return (
        <div>
            <h2>{title}</h2>
            <GridProductos producto={randomProduct}/>
        </div>
    )
}