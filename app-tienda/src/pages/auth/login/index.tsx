//styles
import styles from "./login.module.scss"
//layout
import { AuthLayout } from "@/layouts"
//components
import { LoginForm } from "@/components/Auth"
//next 
import Link from "next/link"


const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <div className={styles.singIn}>
          <h3>Iniciar sesión</h3>

          <LoginForm/>

          <div className={styles.actions}>
            <Link href="/auth/register">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default LoginPage