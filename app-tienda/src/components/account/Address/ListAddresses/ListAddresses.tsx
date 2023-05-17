//styles
import styles from "./ListAddresses.module.scss"
// interfaces
import { IDireccion } from "@/interfaces/IDirecciones"
// react
import { FC } from "react"
//components
import { Address } from "./Address"
import { useDirecciones } from "@/hooks/useDirecciones"

// interface Props {
//     direcciones: IDireccion[]
// }

export const ListAddresses = () => {
  
    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
    // const { direcciones, isLoading } = useDirecciones(`/direcciones/${storedUser?.id || ''}`)
    
    console.log(storedUser)

    // const direccionesUser = direcciones.filter(
    //     (direccion) => direccion.usuario == storedUser.id
    // )

    // console.log('direccionesUser', direccionesUser);

    return (
    <div className={styles.addresses}>
        {/* {direcciones.map((direccion) => (
            <Address 
                key={direccion.id}
                direccionId={direccion.id}
                direccion={direccion}
            />
        ))} */}

        <Address/>
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