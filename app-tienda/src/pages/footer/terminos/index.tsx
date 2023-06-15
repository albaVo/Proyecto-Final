import { BasicLayout } from "@/layouts"
import styles from "./Terminos.module.scss"
import { Container } from "@mui/material"


const TerminosCondicionesPage = () => {
  return (
    <BasicLayout>
        <div className={styles.container}>
            <Container>
                <h1>Términos y condiciones</h1>
            </Container>
        </div>
    </BasicLayout>
  )
}

export default TerminosCondicionesPage