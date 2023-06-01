//styles
import styles from "./Panel.module.scss"
//mui
import { Check, LocalOffer } from "@mui/icons-material"
import { Button, Container } from "@mui/material"
//utils
import { fn } from "@/utils"
//components
import { WhishlistIcon } from "@/components/shared"
//hooks
import { useCart } from "@/hooks/useCart"
//react
import { useState } from "react"


export const Panel = (props: any) => {
    
    const { producto, productoId } = props
    const [loading, setLoading] = useState(false)
    const { addCart } = useCart()

    const buyPrice = fn.calcDiscount(producto.precio, producto.descuento)
    
    const addCartWrapper = () => {
        setLoading(true)
        addCart(productoId)

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    return (
        <Container className={styles.panel}>
            <div className={styles.imgContainer}>
                <img src={producto.fondo}/>
            </div>

            <div className={styles.actionsContainer}>
                <div>
                    <h2>{producto.titulo}</h2>

                    <div className={styles.moreInfo}>
                        <span>
                            <img src={producto.categoria.icono}/>
                            {producto.categoria.titulo}
                        </span>
                        <span>
                            <Check/>
                            En stock
                        </span>
                    </div>

                    <div className={styles.price}>
                        {producto.descuento > 0 && (
                            <>
                                <span className={styles.originalPrice}>
                                    <LocalOffer/>
                                    {producto.precio}€
                                </span>

                                <span className={styles.discount}>
                                    -{producto.descuento}%
                                </span>
                            </>
                        )}

                        <span className={styles.price}>{buyPrice}€</span>
                    </div>

                    <Button 
                        sx={{textDecoration: 'none'}} 
                        fullWidth
                        onClick={addCartWrapper}
                    >
                        Comprar ahora
                    </Button>

                    <WhishlistIcon productoId={productoId} className={styles.heart}/>
                </div>
            </div>
        </Container>
    )
}
