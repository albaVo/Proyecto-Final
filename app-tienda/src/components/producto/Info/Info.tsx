//styles
import styles from "./Info.module.scss"
//mui
import { Container } from "@mui/material"


export const Info = (props: any) => {

    const { producto } = props

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
        <Container className={styles.info}>
            <div className={styles.summary}>
                <p>{producto.descripcion}</p>
            </div>

            <div className={styles.more}>
                <ul>
                    <li>
                        <span>Fecha de lanzamiento:</span> {randomDate}
                    </li>
                </ul>
            </div>
        </Container>
    )
}
