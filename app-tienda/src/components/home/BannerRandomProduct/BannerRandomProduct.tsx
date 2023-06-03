//styles
import styles from "./BannerRandomProduct.module.scss"
//next
import Image from "next/image";
import Link from "next/link";
//hooks
import { useProductos } from "@/hooks/useProductos";
//mui
import { Container } from "@mui/material";
//utils
import { fn } from "@/utils";
//interfaces
import { IProducto } from "@/interfaces/IProductos";
//react
import { FC } from "react";
//components
import { Discount } from "@/components/shared";

interface Props {
  productos: IProducto[]
}

export const BannerRandomProduct:FC<Props> = ({productos}) => {
  
  const randomProduct = productos[Math.floor(Math.random() * productos.length)]
  console.log(randomProduct);

  const precio = randomProduct?.precio;
  const descuento = randomProduct?.descuento;
  const precioFinal = fn.calcDiscount(precio, descuento);

  // numero random
  // function getRandomNumber(min: number, max: number) {
  //   min = Math.ceil(min)
  //   max = Math.floor(max)
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  // const randomNumber = getRandomNumber(1, 100)
  

  return (
    <div className={styles.container}>
      
      <img src={randomProduct?.fondo} alt={"Fondo producto"} className={styles.fondo}/>
      
      <Link className={styles.infoContainer} href={`/productos/${randomProduct?.id}`}>
        <Container>
          <h2>{randomProduct?.titulo}</h2>

          <p className={styles.price}>
            {randomProduct?.descuento > 0 && (
              <Discount>-{randomProduct?.descuento}%</Discount>
            )}
            <span className={styles.finalPrice}>
              {precioFinal}€
            </span>
          </p>
        </Container>
      </Link>

    </div>
  )
}