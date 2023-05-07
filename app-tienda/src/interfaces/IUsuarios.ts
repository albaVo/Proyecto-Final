export interface IUsuario {
    id:          number;
    nombre:      string;
    apellidos:   string;
    telefono:    number;
    email:       string;
    contraseña:  string;
    isActive:    boolean;
    roles:       string[];
    // direcciones: Direccione[];
}
