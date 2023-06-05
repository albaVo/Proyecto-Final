//styles
import styles from "./Basket.module.scss"
//mui
import { Delete } from "@mui/icons-material"
import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
//utils
import { fn } from "@/utils"
//react
import { useState } from "react"
//hooks
import { useCart } from "@/hooks/useCart"
//lodash
import { map } from "lodash"
//semantic-ui
import { Dropdown } from "semantic-ui-react"


export const Basket = (props: any) => {
    
    const { productos } = props
    const { changeQuantityItem, deleteItem } = useCart()

    const options = Array.from({ length: 10 }, (_, index) => {
        const number = index + 1 
        return { key: number, text: String(number), value: number}
    })
    
    return (
        <div className={styles.basket}>
            <h2>Cesta</h2>

            <div className={styles.block}>
                {map(productos, (producto) => (
                    <div key={producto.id} className={styles.product}>
                        <img src={producto.imagen}/>
                        <div>
                            <div className={styles.info}>
                                <div>
                                    <p>{producto.titulo}</p>
                                    <p>{producto.categoria.titulo}</p>
                                </div>
                                <Delete onClick={() => deleteItem(producto.id)}/>
                            </div>

                            <div className={styles.quantity}>
                                <Dropdown 
                                    className="number"
                                    options={options}
                                    selection
                                    value={producto.quantity}
                                    compact
                                    onChange={(_, data) => changeQuantityItem(producto.id, data.value)}
                                />
                                <span>
                                    {fn.calcDiscount(producto.precio, producto.descuento)}€
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
