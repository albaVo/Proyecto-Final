//styles
import { Container } from "@mui/material"
import styles from "./BarraInfo.module.scss"
import { LocalShipping, QuestionAnswer, Security } from "@mui/icons-material"

export const BarraInfo = () => {
  return (
    <div className={styles.barraInfo}>
        <Container className={styles.content}>
            {BarraData.map((data) => (
                <div className={styles.block}>
                    {data.icon}
                    <div>
                        <h5>{data.title}</h5>
                        <span>{data.description}</span>
                    </div>
                </div>
            ))}
            
        </Container>
    </div>
  )
}


const BarraData = [
    {
        icon: <LocalShipping/>,
        title: "Súper rápido",
        description: "Entrega en 24/48 horas"
    },
    {
        icon: <Security/>,
        title: "Fiable y seguro",
        description: "Más de 10.000 productos"
    },
    {
        icon: <QuestionAnswer/>,
        title: "Atención al cliente",
        description: "Agente disponible 24/7"
    }
]