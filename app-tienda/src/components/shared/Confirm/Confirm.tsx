//styles
import styles from "./Confirm.module.scss"
//mui
import { Dialog } from '@mui/material'


export const Confirm = (props: any) => {

    const { ...rest } = props

    return (
        <Dialog className={styles.confirm} {...rest}/>
    )
}
