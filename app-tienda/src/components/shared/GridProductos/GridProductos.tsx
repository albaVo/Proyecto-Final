//styles
import styles from "./GridProductos.module.scss"
//next
import Link from "next/link"
//components
import { Discount } from "../Label"
//utils
import { fn } from "@/utils"


export const GridProductos = (props: any) => {

    const {productos} = props

    return (
        <div className={styles.gridProductos}>
            {productos?.map((product: any) => (
               <Link href="/" className={styles.producto} key={product?.id}>
                    <div>
                        <img src={product?.imagen}/>
                        {product?.descuento > 0 && (
                            <Discount className={styles.discount}>
                                {`-${product?.descuento}%`}
                            </Discount>
                        )}
                    </div>

                    <div>
                        <span>{product?.titulo}</span>
                        <span className={styles.price}>
                            {fn.calcDiscount(product?.precio, product?.descuento)}€
                        </span>
                    </div>
               </Link> 
            ))}
        </div>
    )
}