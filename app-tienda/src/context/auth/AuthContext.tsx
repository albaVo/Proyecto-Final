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
}

export const AuthContext = createContext( {} as ContextProps )