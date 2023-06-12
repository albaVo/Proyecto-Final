import { ICategoria } from "./ICategorias";
import { ISubcategoria } from "./ISubcategorias";

export interface IProducto {
    id:           number;
    titulo:       string;
    genero:       string;
    descripcion:  string;
    imagen:       string;
    fondo:        string;
    capturas:     string;
    video:        string;
    precio:       number;
    descuento:    number;
    stock:        number;
    categoria:    ICategoria;
    subcategoria: ISubcategoria
}
