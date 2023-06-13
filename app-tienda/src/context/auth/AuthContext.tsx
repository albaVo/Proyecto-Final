// interfaces
import { IUsuario } from "@/interfaces/IUsuarios";
import { IRespuestaApiAuth } from "./interfaces/IRespuestaAuthApi";
// react
import { Dispatch, SetStateAction, createContext } from "react";


interface ContextProps {
    isLoggedIn: boolean;
    user?: IUsuario

    // usuarios
    registerUser: (email: string, contraseña: string, usuario: string, apellidos: string) => Promise<IRespuestaApiAuth>
    loginUser: (email: string, contraseña: string) => Promise<boolean>
    logout: () => void
    updateUser: (id: number, nombre: string, apellidos: string, email: string, contraseña: string) => Promise<IRespuestaApiAuth>
    

    // direcciones
    createDireccion: (titulo: string, direccion: string, ciudad: string, codigo_postal: number, telefono: number, usuarioId: number) => Promise<{
        hasError: boolean;
        message: string;
        id?: number;
    }>
    updateDireccion: (id: number, titulo?: string, direccion?: string, ciudad?: string, codigo_postal?: number, telefono?: number, usuarioId?: number) => Promise<IRespuestaApiAuth>
    deleteDireccion: (id: number) => Promise<IRespuestaApiAuth>


    //pedidos
    createPedido: (fecha_pedido: Date, precio_total: number, direccionId: number, usuarioId: number, productosId: number) => Promise<{
        hasError: boolean;
        message: string;
        id?: number;
    }>


    //productos
    createProducto: (titulo: string, genero: string, descripcion: string, imagen: string, fondo: string, capturas: string[], video: string, precio: number, descuento: string, stock: number, categoriaId: number, subcategoriaId: number) => Promise<{
        hasError: boolean;
        message: string;
        id?: number;
    }>
    updateProducto: (id: number, titulo: string, genero: string, descripcion: string, imagen: string, fondo: string, capturas: string[], video: string, precio: number, descuento: string, stock: number, categoriaId: number, subcategoriaId: number) => Promise<IRespuestaApiAuth>
    deleteProducto: (id: number) => Promise<IRespuestaApiAuth>
}

export const AuthContext = createContext( {} as ContextProps )