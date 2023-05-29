//styles
import { Container } from "@mui/material"
import styles from "./Panel.module.scss"

export const Panel = (props: any) => {
    
    const { producto, productoId } = props
    
    return (
        <Container className={styles.panel}>
            <div className={styles.imgContainer}>
                <img src={producto.fondo}/>
            </div>

            <div className={styles.actionsContainer}>
                <div>
                    <h2>{producto.titulo}</h2>

                    <div className={styles.moreInfo}>
                        <span>
                            <img src={producto.categoria.icono}/>
                            {producto.categoria.titulo}
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
