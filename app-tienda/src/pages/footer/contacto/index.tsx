import { BasicLayout } from "@/layouts"
import styles from "./Contacto.module.scss"

const index = () => {
  return (
    <BasicLayout isContainer relative>
        <div className={styles.container}>
            <form id="form">
              <h3>CONTACTO</h3>
              <input type="text" placeholder="Nombre y apellidos" name="nombre" id="nombre" required/>
              <input type="email" placeholder="Email" name="email" id="email" required/>
              <input type="text" placeholder="Teléfono" name="telefono" id="telefono" required/>
              <textarea rows="4" placeholder="¿Cómo podemos ayudarte?" name="mensaje" id="mensaje" required></textarea>
              
              <input type="submit" id="button" value="Enviar" className={styles.boton} />
            </form>

            <script type="text/javascript"
              src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
            </script>

            <script type="text/javascript">
              emailjs.init('8KL_UBqJjyTokEapB')
            </script>
        </div>
    </BasicLayout>
  )
}

export default index