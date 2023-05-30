//styles
import styles from "./Gallery.module.scss"
//components
import { FullModal } from "@/components/shared"
//react
import { useState } from "react"


export const Gallery = (props: any) => {
    
    const { capturas } = props
    const [show, setShow] = useState(false)

    const capturasClone = [...capturas]
    const principalImage = capturasClone.shift()

    const onOpenClose = () => setShow((prevState) => !prevState)

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
                <h2>Galería de imágenes</h2>
            </FullModal>
        </>
    )
}
