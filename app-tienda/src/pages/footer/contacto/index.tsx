import { BasicLayout } from "@/layouts"
import styles from "./Contacto.module.scss"

const index = () => {
  return (
    <BasicLayout isContainer relative>
        <div className={styles.container}>
            <form>
                <h3>CONTACTO</h3>
                <input type="text" placeholder="Nombre y apellidos" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Teléfono" required/>
                <textarea rows="4" placeholder="¿Cómo podemos ayudarte?"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </BasicLayout>
  )
}

export default index