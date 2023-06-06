//styles
import styles from "./Resume.module.scss"
//react
import { useEffect, useState } from "react"
//lodash
import { forEach } from "lodash"
//utils
import { fn } from "@/utils"

export const Resume = (props: any) => {
    
    const { productos, addressSelected } = props
    const [total, setTotal] = useState(null)

    console.log(total);
    

    useEffect(() => {
      let totalTemp = 0

      forEach(productos, (producto) => {
        // const price = fn.calcDiscount(producto.precio, producto.descuento)
        // totalTemp += price * producto.quantity

        const price = parseFloat(producto.precio);
        const discountPrice = fn.calcDiscount(price, producto.descuento);
        totalTemp += discountPrice * producto.quantity;
      })

      setTotal(totalTemp.toFixed(2))
    }, [productos])
    
    
    return (
        <div>Resume</div>
    )
}
