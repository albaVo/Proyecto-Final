//styles
import styles from "./Gallery.module.scss"
//components
import { FullModal } from "@/components/shared"
//react
import { useState } from "react"
//slider
import Slider from "react-slick"


export const Gallery = (props: any) => {
    
    const { capturas } = props
    const [show, setShow] = useState(false)

    const onOpenClose = () => setShow((prevState) => !prevState)

    const capturasClone = [...(capturas || [])];
    const principalImage = capturasClone.shift()


    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <img src={principalImage} onClick={onOpenClose}/>
                </div>

                <div className={styles.grid}>
                    {capturasClone.map((captura) => (
                        <div key={captura}>
                            <img src={captura} onClick={onOpenClose}/>
                        </div>
                    ))}
                </div>
            </div>

            <FullModal show={show} onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider>
                        {capturas?.map((captura) => (
                            <div key={captura}>
                                <img src={captura} className={styles.imagen}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </FullModal>
        </>
    )
}
