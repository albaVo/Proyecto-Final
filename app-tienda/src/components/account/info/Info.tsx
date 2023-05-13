//styles
import styles from "./Info.module.scss"
//mui
import { IconButton } from "@mui/material"
import { PersonOutlineOutlined } from "@mui/icons-material"


export default function Info() {

    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
    // console.log(storedUser);


    // fecha random
    function getRandomDate(startDate: Date, endDate: Date): Date {
        const startMillis = startDate.getTime()
        const endMillis = endDate.getTime()
        const randomMillis = startMillis + Math.random() * (endMillis - startMillis)
        return new Date(randomMillis)
    }

    const startDate = new Date('2021-01-01')
    const endDate = new Date('2023-01-01')
    const randomDate = getRandomDate(startDate, endDate).toLocaleDateString()


    return (
        <div className={styles.info}>
            <IconButton className={styles.user}>
                <PersonOutlineOutlined/>
            </IconButton>
            <h3 className={styles.username}>{storedUser.nombre} {storedUser.apellidos}</h3>
            <h4 className={styles.email}>{storedUser.email}</h4>
            <p className={styles.createdAt}>
                Miembro desde: {randomDate}
            </p>

            {/* <h3 className={styles.username}>Alba Villanueva</h3>
            <h4 className={styles.email}>alba@gmail.com</h4>
            <p className={styles.createdAt}>
                Miembro desde: 15/03/2022
            </p> */}
        </div>
    )
}
