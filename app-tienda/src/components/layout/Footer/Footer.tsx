//styles
import styles from "./Footer.module.scss"
//mui
import { Button, Container } from "@mui/material"
import { Facebook, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material"
//next
import Link from "next/link"
import Image from "next/image"


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
                        <Link href='/footer/terminos'>Términos y condiciones</Link>
                        <Link href='#'>Política de privacidad</Link>
                        <Link href='#'>Contacto</Link>
                        <Link href='#'>FAQs</Link>
                    </ul>
                </div>
                
                <div className={styles.social}>
                    <Link href="#"><Facebook sx={{fill: '#3b5998 '}}/></Link>
                    <Link href="#"><Twitter sx={{fill: '#00acee'}}/></Link>
                    <Link href="#"><WhatsApp sx={{fill: '#25D366'}}/></Link>
                    <Link href="#"><Instagram sx={{fill: '#C13584'}}/></Link>
                </div>
            </div>

            <div className={styles.copyright}>
                <span>Copyright © 2023 OlympusArcade - Todos los derechos reservados</span>
            </div>
        </Container>
    </div>
  )
}
