import styles from "./AddressForm.module.scss"
//mui
import { TextField } from "@mui/material"

export const AddressForm = (props: any) => {

    const { onClose } = props

    return (
        <form className={styles.form}>
            <TextField
                placeholder="Titulo de la dirección"
            />
        </form>
    )
}
