import { IDireccion } from "./IDirecciones";
import { IProducto } from "./IProductos";
import { IUsuario } from "./IUsuarios";

export interface IPedido {
    id:            number;
    fecha_pedido:  Date;
    precio_total:  number;
    direccion:     IDireccion;
    usuario:       IUsuario;
    productos:     IProducto[];
}