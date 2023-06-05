//styles
import styles from "./Resume.module.scss"
//next
import { useRouter } from "next/router"
import Link from "next/link"
//react
import { useEffect, useState } from "react"
//lodash
import { forEach } from "lodash"
//utils
import { fn } from "@/utils"
//mui
import { Button } from "@mui/material"


export const Resume = (props: any) => {
    
    const { productos } = props
    const router = useRouter()
    const [totals, setTotals] = useState(null)

    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0
        }
        
        forEach(productos, (producto) => {
            const price = fn.calcDiscount(producto.precio, producto.descuento)
            
            totals = {
                original: totals.original + producto.precio * producto.quantity,
                discount: totals.discount + (producto.precio - price) * producto.quantity,
                price: totals.price + price * producto.quantity
            }

            setTotals(totals)
        })
    }, [productos])

    const goToStepTwo = () => {
        router.replace({query: {...router.query, step: 2}})
    }

    if(!totals) return null
    
    
    return (
        <div className={styles.resume}>
            <h2>Resumen</h2>

            <div className={styles.block}>
                <div className={styles.prices}>
                    <div>
                        <span>Precio oficial</span>
                        <span>{totals.original.toFixed(2)}€</span>
                    </div>
                    <div>
                        <span>Descuento</span>
                        <span>{totals.discount.toFixed(2)}€</span>
                    </div>
                    <div>
                        <span>Subtotal</span>
                        <span>{totals.price.toFixed(2)}€</span>
                    </div>
                </div>

                <Button 
                    onClick={goToStepTwo} 
                    sx={{textTransform: 'none', width: '100%', fontSize: 13}}
                >
                    Proceder con el pago
                </Button>

                <Link href="/">Continuar comprando</Link>
            </div>
        </div>
    )
}
