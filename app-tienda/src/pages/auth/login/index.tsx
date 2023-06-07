//styles
import styles from "./login.module.scss"
//layout
import { AuthLayout } from "@/layouts"
//components
import { LoginForm } from "@/components/auth"
import { Seo } from "@/components/shared"
//next 
import Link from "next/link"


const LoginPage = () => {
  return (
    <>
      {/* <Seo title="Iniciar sesión"/> */}

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