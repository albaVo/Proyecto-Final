//styles
import styles from "./register.module.scss"
//layout
import { AuthLayout } from "@/layouts"
//next
import Link from "next/link"
//components
import { RegisterForm } from "@/components/Auth/RegisterForm"


const RegisterPage = () => {
  return (
    <>
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