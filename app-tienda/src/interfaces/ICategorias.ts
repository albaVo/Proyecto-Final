import { IProducto } from "./IProductos";
import { ISubcategoria } from "./ISubcategorias";

export interface ICategoria {
    id:            number;
    titulo:        string;
    icono:         string;
    subcategorias: ISubcategoria[];
    productos:     IProducto[];
}
