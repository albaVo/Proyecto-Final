//styles
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import styles from "./Order.module.scss"
//lodash
import { forEach, map } from "lodash"
//react
import { useState } from "react"
import { fn } from "@/utils"


export const Order = (props: any) => {

    const { pedido } = props
    const [showModal, setShowModal] = useState(false)
    const products = pedido.productos
    const address = pedido.direccion
<<<<<<< HEAD
    // console.log(products)

    const openCloseModal = () => setShowModal((prevState) => !prevState)

    //cambiar formato fecha
    const fecha = pedido.fecha_pedido

=======
    console.log(products)

    const openCloseModal = () => setShowModal((prevState) => !prevState)

    // const getTotalProducts = () => {
    //     let total = 0

    //     forEach(products, (product) => {
    //         if (product && typeof product.quantity === 'number'){
    //             total += product.quantity
    //         }
    //     })

    //     return total
    // }


    //cambiar formato fecha
    const fecha = pedido.fecha_pedido

>>>>>>> 3cd86c917d913db3da347de476aeabb7c9251378
    const date = new Date(fecha)
    const dia = date.getDate()
    const mes = date.getMonth() +1
    const anio = date.getFullYear()
    
    const fechaFormateada = `${dia}/${mes}/${anio}`
    

    return (
        <>
            <div className={styles.order} onClick={openCloseModal}>
                <div>
                    <span>{fechaFormateada}</span>
                    <p>{products.length} productos</p>
                </div>

                <p>{pedido.precio_total}€</p>
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
                    <p>TOTAL: {pedido.precio_total}€</p>
                </div>
            </BasicModal>
        </>
    )
}
