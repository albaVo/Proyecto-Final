//styles
import styles from "./Footer.module.scss"
//mui
import { Container } from "@mui/material"
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
                        <Image src="/images/logo.png" width={150} height={60} alt="OlympusArcade"/>
                    </Link>
                </div>

                <div>

                </div>
                
                <div className={styles.social}>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}
