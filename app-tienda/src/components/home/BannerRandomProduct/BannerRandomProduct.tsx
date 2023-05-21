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
      
      {/* <img src={randomProduct?.fondo} alt={"Fondo producto"} className={styles.fondo}/> */}
      
      {/* <Link className={styles.infoContainer} href="">
        <Container>
          <h2>{randomProduct?.titulo}</h2>

          <p className={styles.price}>
            <Discount>-{randomProduct?.descuento}%</Discount>
            <span className={styles.finalPrice}>
              {precioFinal}€
            </span>
          </p>
        </Container>
      </Link> */}

      {Producto.map((product) => (
        <>
          <img src={product.fondo} alt={"Fondo producto"} className={styles.fondo}/>
          
          <Link className={styles.infoContainer} href="">
            <Container>
              <span className={styles.date}>
                {/* hace randomNumber días */}
              </span>

              <h2>{product.titulo}</h2>

              <p className={styles.price}>
                <Discount>-{product.descuento}%</Discount>
                <span className={styles.finalPrice}>
                  {precio}€
                </span>
              </p>
            </Container>
          </Link>
        </>
      ))}

    </div>
  )
}


const Producto = [
  {
    "titulo": "The Last of Us Part I",
    "genero": "Acción y adventura",
    "descripcion": "En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país. ",
    "imagen": "https://gaming-cdn.com/images/products/13298/616x353/the-last-of-us-part-i-pc-juego-steam-cover.jpg?v=1680018236",
    "fondo": "https://gaming-cdn.com/img/products/13298/pcover/13298.jpg?v=1680018236",
    "capturas": [
        "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-1.jpg?v=1680018236",
        "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-2.jpg?v=1680018236",
        "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-3.jpg?v=1680018236",
        "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-4.jpg?v=1680018236",
        "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-5.jpg?v=1680018236"
    ],
    "video": "https://www.youtube.com/watch?v=CxVyuE2Nn_w",
    "precio": 60,
    "descuento": 39,
    "stock": 15,
    "categoriaId": 2,
    "subcategoriaId": 12
  }
]