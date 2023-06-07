//styles
import styles from "./Order.module.scss"
//lodash
import { forEach } from "lodash"

export const Order = (props: any) => {

    const { order } = props
    const products = order.products

    const getTotalProducts = () => {
        let total = 0

        forEach(products, (product) => {
            total += product.quantity
        })

        return total
    }

    return (
        <>
            <div className={styles.order}>
                <div>
                    <span>{order.fecha_pedido}</span>
                    <p>{getTotalProducts} productos</p>
                </div>

                <p>{order.precio_total.toFixed(2)}€</p>
            </div>
        </>
    )
}
