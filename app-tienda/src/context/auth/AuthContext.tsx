// interfaces
import { IUsuario } from "@/interfaces/IUsuarios";
import { IRespuestaApiAuth } from "./interfaces/IRespuestaAuthApi";
// react
import { Dispatch, SetStateAction, createContext } from "react";


interface ContextProps {
    isLoggedIn: boolean;
    user?: IUsuario

    //firmas
    registerUser: (email: string, contraseña: string, usuario: string, apellidos: string) => Promise<IRespuestaApiAuth>;
    loginUser: (email: string, contraseña: string) => Promise<boolean>
    logout: () => void
}

export const AuthContext = createContext( {} as ContextProps )