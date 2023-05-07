//styles
import styles from "./AuthLayout.module.scss"
//mui
import { Close } from "@mui/icons-material"
//next
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
//react
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/auth";


const isTokenPresent = () => {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined && token !== '';
}

export const AuthLayout = (props: any) => {

  const { children } = props
  const router = useRouter()
  const { user, logout } = useContext(AuthContext)

  useEffect(() => {
    if (isTokenPresent()) {
      
      router.push('/');
    }
  }, [router]);


  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo.png" width={150} height={60} alt="OlympusArcade"/>
        </Link>

        <Link href="/">
          <Close/>
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>

      <div className={styles.blockRight}/>
    </div>
  )
}
