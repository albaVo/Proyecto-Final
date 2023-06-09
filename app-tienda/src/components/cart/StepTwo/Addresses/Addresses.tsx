//styles
import classNames from "classnames"
import styles from "./Addresses.module.scss"

export const Addresses = (props: any) => {

    const { addressSelected, setAddressSelected } = props
    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  

    return (
        <div className={styles.addresses}>
            <h2>Dirección</h2>

            {storedUser.direcciones.map((direccion) => (
                <div 
                    key={direccion.id} 
                    className={classNames(styles.address, {
                        [styles.active]: direccion.id === addressSelected?.id
                    })}
                    onClick={() => setAddressSelected(direccion)}
                >
                    <p>{storedUser.nombre} {storedUser.apellidos} - {direccion.titulo}</p>
                    <p>{direccion.direccion}, {direccion.ciudad}, {direccion.codigo_postal},{direccion.telefono}</p>
                </div>
            ))}
        </div>
    )
}
