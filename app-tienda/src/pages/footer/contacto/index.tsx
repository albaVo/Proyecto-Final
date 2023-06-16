import { BasicLayout } from "@/layouts"
import styles from "./Contacto.module.scss"

const index = () => {
  return (
    <BasicLayout isContainer relative>
        <div className={styles.container}>
            <form>
                <h3>CONTACTO</h3>
                <input type="text" placeholder="Nombre y apellidos" required/>
            </form>
        </div>
    </BasicLayout>
  )
}

export default index