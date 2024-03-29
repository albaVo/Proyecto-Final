//styles
import styles from "./register.module.scss"
//layout
import { AuthLayout } from "@/layouts"
//next
import Link from "next/link"
//components
import { RegisterForm } from "@/components/auth/RegisterForm"
import { Seo } from "@/components/shared"


const RegisterPage = () => {
  return (
    <>
      {/* <Seo title="Registrarse"/> */}

      <AuthLayout>
        <div className={styles.singIn}>
          <h3>Crear cuenta</h3>
          
          <RegisterForm/>

          <div className={styles.actions}>
            <Link href="/auth/login">Atras</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default RegisterPage