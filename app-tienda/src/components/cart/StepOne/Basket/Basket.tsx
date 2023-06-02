//styles
import styles from "./Basket.module.scss"
//mui
import { Delete } from "@mui/icons-material"
import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
//utils
import { fn } from "@/utils"
//react
import { useState } from "react"
import { useCart } from "@/hooks/useCart"


export const Basket = (props: any) => {
    
    const { productos } = props
    const { changeQuantityItem } = useCart()
    
    return (
        <div className={styles.basket}>
            <h2>Cesta</h2>

            <div className={styles.block}>
                {productos.map((producto) => (
                    <div key={producto.id} className={styles.product}>
                        <img src={producto.imagen}/>
                        <div>
                            <div className={styles.info}>
                                <div>
                                    <p>{producto.titulo}</p>
                                    <p>{producto.categoria.titulo}</p>
                                </div>
                                <Delete/>
                            </div>

                            <div className={styles.quantity}>
                                <Select 
                                    value={producto.quantity}
                                    onChange={(_, data) => changeQuantityItem(producto.id, data.vlaue)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <span>
                                        {fn.calcDiscount(producto.precio, producto.descuento)} €
                                    </span>
                                </Select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
