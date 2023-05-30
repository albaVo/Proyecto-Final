//styles
import styles from "./Gallery.module.scss"

export const Gallery = (props: any) => {
    
    const { capturas } = props

    const capturasClone = [...capturas]
    const principalImage = capturasClone.shift()

    const onOpenClose = () => {

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
        </>
    )
}
