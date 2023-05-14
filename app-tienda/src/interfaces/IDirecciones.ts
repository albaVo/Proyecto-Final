import { IUsuario } from "./IUsuarios";

export interface IDireccion {
    id:            number;
    titulo:        string;
    direccion:     string;
    ciudad:        string;
    codigo_postal: string;
    telefono:      string;
    usuario:       IUsuario;
}