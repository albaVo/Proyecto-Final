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

    const capturasClone = [...capturas]
    const principalImage = capturasClone.shift()

    const settings = {
        dots: true,
        dotsClass: styles.dots,
        infinite: true,
        slidersToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (index: any) {
            return <img src={capturas(index)}/>
        }
    }
        

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <img src={principalImage.imagen} onClick={onOpenClose}/>
                </div>

                <div className={styles.grid}>
                    {capturasClone.map((captura) => (
                        <div key={captura.id}>
                            <img src={captura.imagen} onClick={onOpenClose}/>
                        </div>
                    ))}
                </div>
            </div>

            <FullModal show={show} onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {capturas.map((captura:any) => (
                            <div>
                                <img src={captura}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </FullModal>
        </>
    )
}
