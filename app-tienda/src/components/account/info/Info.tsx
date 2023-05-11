//styles
import styles from "./Info.module.scss"
//mui
import { IconButton } from "@mui/material"
import { PersonOutlineOutlined } from "@mui/icons-material"


export default function Info() {

    // const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
    // console.log(storedUser);

    return (
        <div className={styles.info}>
            {/* <h3>{storedUser.nombre}</h3> */}
            <IconButton className={styles.user}>
                <PersonOutlineOutlined/>
            </IconButton>
            <h3 className={styles.username}>Alba Villanueva</h3>
            <h4 className={styles.email}>alba@gmail.com</h4>
            <p className={styles.createdAt}>
                Miembro desde: 15/03/2022
            </p>
        </div>
    )
}
