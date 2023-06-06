//styles
import styles from "./Resume.module.scss"
//react
import { useEffect, useState } from "react"
//lodash
import { forEach, map } from "lodash"
//utils
import { fn } from "@/utils"
import { Button } from "@mui/material"

export const Resume = (props: any) => {
    
    const { productos, addressSelected } = props
    const [total, setTotal] = useState<number>(0)    

    useEffect(() => {
      let totalTemp = 0

      forEach(productos, (producto) => {
        const price = producto.precio
        const discountPrice = fn.calcDiscount(price, producto.descuento);
        totalTemp += discountPrice * producto.quantity;
      })

      setTotal(totalTemp)
    }, [productos])
    
    
    return (
        <div className={styles.resume}>
            <h2>Resumen</h2>

            <div className={styles.block}>
                <div className={styles.products}>
                    {map(productos, (producto) => (
                        <div key={producto.id} className={styles.product}>
                            <div>
                                <p>{producto.titulo}</p>
                                <span>{producto.categoria.titulo}</span>
                            </div>
                            <span>
                                {producto.quantity > 1 && `${producto.quantity}x`}
                                {fn.calcDiscount(producto.precio, producto.descuento)}€
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.blockTotal}>
                <div>
                    <span>Total</span>
                    <span>{total}€</span>
                </div>

                <Button sx={{textTransform: 'none'}} fullWidth disabled={!addressSelected}>
                    Pagar
                </Button>
            </div>
        </div>
    )
}