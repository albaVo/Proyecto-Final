//styles
import styles from "./Panel.module.scss"
//mui
import { Check, Close, LocalOffer } from "@mui/icons-material"
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
    
    const { product, productoId } = props
    const [loading, setLoading] = useState(false)
    const { addCart } = useCart()

    const buyPrice = fn.calcDiscount(product.precio, product.descuento)
    
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
                <img src={product?.imagen}/>
            </div>

            <div className={styles.actionsContainer}>
                <div>
                    <h2>{product?.titulo}</h2>

                    <div className={styles.moreInfo}>
                        <span>
                            <img src={product?.categoria?.icono}/>
                            {product?.categoria?.titulo}
                        </span>
                        
                        {product.stock > 0 ? (
                            <span>
                                <Check sx={{fill: '#69af00'}}/>
                                En stock
                            </span>
                        ) : (
                            <span>
                                <Close sx={{fill: '#ff0a4e'}}/>
                                Sin stock
                            </span>
                        )}
                    </div>

                    <div className={styles.price}>
                        {product?.descuento > 0 && (
                            <>
                                <span className={styles.originalPrice}>
                                    <LocalOffer/>
                                    {product.precio}€
                                </span>

                                <span className={styles.discount}>
                                    -{product.descuento}%
                                </span>
                            </>
                        )}

                        <span className={styles.price}>{buyPrice}€</span>
                    </div>

                    {product.stock > 0 ? (
                        <Button 
                            sx={{textTransform: 'none'}} 
                            fullWidth
                            onClick={addCartWrapper}
                        >
                            Comprar ahora
                        </Button>
                    ) : (
                        <Button 
                            sx={{textTransform: 'none'}} 
                            fullWidth
                            disabled
                        >
                            Comprar ahora
                        </Button>
                    )}

                    <WhishlistIcon productoId={productoId} className={styles.heart}/>
                </div>
            </div>
        </Container>
    )
}
