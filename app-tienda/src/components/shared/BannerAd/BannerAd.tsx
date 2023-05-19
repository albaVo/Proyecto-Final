//styles
import styles from "./BannerAd.module.scss"
//mui
import { Button, Container } from "@mui/material"
//next
import Image from "next/image";


export const BannerAd = (props: any) => {

    const { title, subtitle, titleLink, link, image } = props

    return (
        <div className={styles.container}>
            <Container className={styles.containerImage}>
                <Image src={image} width={400} height={300} alt="Anuncio"/>
            </Container>

            <div className={styles.infoContainer}>
                <Container>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>

                    <Button href={link} sx={{textTransform: 'none'}}>
                        {titleLink}
                    </Button>
                </Container>
            </div>
        </div>
    )
}
