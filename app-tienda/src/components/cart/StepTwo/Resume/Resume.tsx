//styles
import styles from "./Resume.module.scss"
//react
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
//lodash
import { forEach, map } from "lodash"
//utils
import { fn } from "@/utils"
//mui
import { Button, CircularProgress } from "@mui/material"
//api
import { Cart } from "@/api/Cart"
//stripe
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
//next
import { useRouter } from "next/router"
//context
import { AuthContext } from "@/context"
//hooks
import { useCart } from "@/hooks/useCart"


const cartCtrl = new Cart()

type PedidoData = {
    id?: number,
    fecha_pedido?: Date,
    precio_total: number,
    direccionId: number,
    usuarioId: number,
    productosId: number
}

export const Resume = (props: any) => {
    
    const { productos, addressSelected, id } = props

    const [total, setTotal] = useState<number>(0)  
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { deleteAllItems } = useCart()

    const stripe = useStripe()
    const elements = useElements()

    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  
    
    //crear pedido
    const { createPedido } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<PedidoData>()

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const onCreatePedido = async ( InputData: PedidoData) => {
        const { precio_total } = InputData
        
        setLoading(true)

        const direccionId = addressSelected.id
        const usuarioId = storedUser.id
        const productosId = productos.map((producto: any) => producto.id)

        const { hasError, message, id } = await createPedido (
            new Date(),
            precio_total,
            direccionId, 
            usuarioId,
            productosId
        )
        console.log(message)
    }


    useEffect(() => {
      let totalTemp = 0

      forEach(productos, (producto) => {
        const price = producto.precio
        const discountPrice = fn.calcDiscount(price, producto.descuento);
        totalTemp += discountPrice * producto.quantity;
      })

      setTotal(totalTemp)
    }, [productos])


    const onPay = async () => {
        setLoading(true)

        if (!stripe || !elements) {
            setLoading(false)
            return
        }

        const cardElement = elements.getElement(CardElement)
        const result = await stripe.createToken(cardElement)
        
        if (result.error) {
            console.error(result.error.message)
        } else {
            onCreatePedido({
                precio_total: total,
                direccionId: addressSelected.id,
                usuarioId: storedUser.id,
                productosId: productos.map((producto: any) => producto.id)
            })
            deleteAllItems()
            goToStepEnd()
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }



    const goToStepEnd = () => {
        router.replace({query: {...router.query, step: 3}})
    }

    if (!total) return null
    
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

                <Button 
                    sx={{textTransform: 'none'}} 
                    fullWidth 
                    disabled={!addressSelected}
                    onClick={onPay}
                >
                    {loading ? <CircularProgress size={20} /> : 'Pagar'}
                </Button>
            </div>
        </div>
    )
}