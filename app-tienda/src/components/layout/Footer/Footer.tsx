//styles
import styles from "./Footer.module.scss"
//mui
import { Button, Container } from "@mui/material"
//next
import Link from "next/link"
import Image from "next/image"
import { Facebook } from "@mui/icons-material"


export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <Image src="/images/logo.png" width={150} height={50} alt="OlympusArcade"/>
                    </Link>
                </div>

                <div>
                    <ul>
                        <Link href='#'>Términos y condiciones</Link>
                        <Link href='#'>Política de privacidad</Link>
                        <Link href='#'>Contacto</Link>
                        <Link href='#'>FAQs</Link>
                    </ul>
                </div>
                
                <div className={styles.social}>
                    <Link href="#"><Facebook sx={{bg: '#3b5998'}}/></Link>
                </div>
            </div>
        </Container>
    </div>
  )
}
