import { IUsuario } from "@/interfaces/IUsuarios"

export interface IRespuestaApiAuth {
    hasError: boolean,
    message?: string
}


export interface IRespuestaLogin {
    token: string,
    usuario: IUsuario
}