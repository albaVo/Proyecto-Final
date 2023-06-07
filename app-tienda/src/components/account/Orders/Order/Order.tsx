//styles
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import styles from "./Order.module.scss"
//lodash
import { forEach, map } from "lodash"
//react
import { useState } from "react"
import { fn } from "@/utils"


export const Order = (props: any) => {

    const { order } = props
    const [showModal, setShowModal] = useState(false)
    const products = order.products
    const address = order.direccion

    const openCloseModal = () => setShowModal((prevState) => !prevState)

    const getTotalProducts = () => {
        let total = 0

        forEach(products, (product) => {
            total += product.quantity
        })

        return total
    }

    return (
        <>
            <div className={styles.order} onClick={openCloseModal}>
                <div>
                    <span>{order.fecha_pedido}</span>
                    <p>{getTotalProducts} productos</p>
                </div>

                <p>{order.precio_total.toFixed(2)}€</p>
            </div>

            <BasicModal 
                show={showModal} 
                onClose={openCloseModal}
                title="Información del pedido"
            >
                {map(products, (product) => (
                    <div className={styles.product}>
                        <img src={product.imagen}/>

                        <div>
                            <div className={styles.info}>
                                <div>
                                    <p>{product.titulo}</p>
                                    <p>{product.categoria.titulo}</p>
                                </div>
                            </div>

                            <div className={styles.quantity}>
                                <span>x{product.quantity}</span>
                                <span>{fn.calcDiscount(product.precio, product.descuento)}€</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.address}>
                    <div>
                        <p className={styles.title}>{address.titulo}</p>
                        <p className={styles.info}>
                            {address.direccion},{address.ciudad}, {address.codigo_postal}, {address.telefono} 
                        </p>
                    </div>
                </div>

                <div className={styles.total}>
                    <p>TOTAL: {order.precio_total}€</p>
                </div>
            </BasicModal>
        </>
    )
}
