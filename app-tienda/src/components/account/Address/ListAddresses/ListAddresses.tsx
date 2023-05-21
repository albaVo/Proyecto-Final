//styles
import styles from "./ListAddresses.module.scss"
// interfaces
import { IDireccion } from "@/interfaces/IDirecciones"
// react
import { FC, useState } from "react"
//components
import { Address } from "./Address"


export const ListAddresses = () => {
  
    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  

    return (
    <div className={styles.addresses}>
        {storedUser.direcciones.map((direccion: any, index: number) => (
            <Address 
                key={direccion.id}
                id={direccion.id}
                titulo={direccion.titulo}
                direccion={direccion.direccion}
                ciudad={direccion.ciudad}
                codigo_postal={direccion.codigo_postal}
                telefono={direccion.telefono}
            />
        ))}
    </div>
  )
}