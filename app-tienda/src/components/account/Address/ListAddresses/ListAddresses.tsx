//styles
import styles from "./ListAddresses.module.scss"
// interfaces
import { IDireccion } from "@/interfaces/IDirecciones"
// react
import { FC } from "react"
import { Address } from "./Address"

interface Props {
    direccion: IDireccion[]
}

export const ListAddresses:FC<Props> = ({direccion}) => {
  return (
    <div className={styles.addresses}>
        {direccionData.map((direccion) => (
            <Address 
                key={direccion.id}
                direccionId={direccion.id}
                direccion={direccion}
            />
        ))}
    </div>
  )
}


const direccionData = [
    {
        "id" : 1,
        "titulo": "Casa Playa",
        "direccion": "Calle Rosales, 8",
        "ciudad": "Almeria",
        "codigo_postal": 46807,
        "telefono": 695874023
    },
    {
        "id" : 2,
        "titulo": "Casa de campo",
        "direccion": "Calle Nueva, 25",
        "ciudad": "Murcia",
        "codigo_postal": 30001,
        "telefono": 654789012
    }
]