import { IProducto } from "./IProductos"

export interface ISubcategoria {
    id:            number
    titulo:        string
    icono:         string
    categoriaId:   number
    productos:     IProducto[]
}