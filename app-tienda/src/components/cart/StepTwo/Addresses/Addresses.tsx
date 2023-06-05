//styles
import classNames from "classnames"
import styles from "./Addresses.module.scss"

export const Addresses = () => {

    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  

    return (
        <div className={styles.addresses}>
            {storedUser.direcciones.map((direccion) => (
                <div key={direccion.id} className={classNames(styles.address)}>
                    <p>{storedUser.nombre} {storedUser.apellidos} {direccion.titulo}</p>
                    <p>{direccion.direccion}, {direccion.ciudad}, {direccion.codigo_postal},{direccion.telefono},</p>
                </div>
            ))}
        </div>
    )
}
