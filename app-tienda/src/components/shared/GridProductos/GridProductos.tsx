//styles
import Link from "next/link"
import styles from "./GridProductos.module.scss"
import { Discount } from "../Label"

export const GridProductos = (props: any) => {

    const {products} = props

    return (
        <div className={styles.gridProductos}>
            {Producto.map((product) => (
               <Link href="/" className={styles.producto}>
                    <div>
                        <img src={product.imagen}/>
                        {product.descuento > 0 && (
                            <Discount className={styles.discount}>
                                {`-${product.descuento}%`}
                            </Discount>
                        )}
                    </div>

                    <div>
                        
                    </div>
               </Link> 
            ))}

            {/* <Link href={} className={styles.producto}>
                <div>
                    <img src={products?.imagen}/>
                </div>
            </Link> */}
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
    },
    {
        "titulo": "Hogwarts Legacy",
        "genero": "Acción y adventura",
        "descripcion": "Hogwarts Legacy es RPG de acción y aventura para un solo jugador basado en el universo de Harry Potter, en el que el jugador se pone en la piel de un recién llegado al castillo de Hogwarts, tan querido por los fans de los libros y la franquicia cinematográfica.",
        "imagen": "https://gaming-cdn.com/images/products/7072/616x353/hogwarts-legacy-pc-juego-steam-europe-cover.jpg?v=1676112832",
        "fondo": "https://gaming-cdn.com/img/products/7072/pcover/7072.jpg?v=1676112832",
        "capturas": [
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-1.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-2.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-3.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-5.jpg?v=1676112832"
        ],
        "video": "https://www.youtube.com/watch?v=S6GTl_vPRvU&t=2s",
        "precio": 60,
        "descuento": 31,
        "stock": 25,
        "categoriaId": 2,
        "subcategoriaId": 12
    },
    {
        "titulo": "Marvel's Spider-Man: Miles Morales",
        "genero": "Acción y adventura",
        "descripcion": "Marvel's Spider-Man: Miles Morales para PC es el juego de consola de 2020 remasterizado para PC. Es un juego de acción y aventura basado en la obra gráfica de una década que culminó en la película de animación de 2018, Spiderman into the Spiderverse.",
        "imagen": "https://gaming-cdn.com/images/products/12953/616x353/marvel-s-spider-man-miles-morales-pc-juego-steam-cover.jpg?v=1673341651",
        "fondo": "https://gaming-cdn.com/img/products/12953/pcover/12953.jpg?v=1673341651",
        "capturas": [
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-1.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-2.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-3.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-4.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-5.jpg?v=1673341651"
        ],
        "video": "https://www.youtube.com/watch?v=CMRBuagwRb4",
        "precio": 50,
        "descuento": 57,
        "stock": 10,
        "categoriaId": 2,
        "subcategoriaId": 12
    },
    {
        "titulo": "Resident Evil 4",
        "genero": "Acción y adventura",
        "descripcion": "Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy, uno de los supervivientes del desastre, ha sido enviado a rescatar a la hija del presidente, a quien han secuestrado. Siguiendo su rastro, llega a una apartada población europea, donde sus habitantes sufren un mal terrible. Así comienza esta historia de un arriesgado rescate y terror escalofriante donde se cruzan la vida y la muerte, y el miedo y la catarsis.",
        "imagen": "https://gaming-cdn.com/images/products/6772/616x353/resident-evil-4-pc-juego-steam-europe-cover.jpg?v=1679667985",
        "fondo": "https://gaming-cdn.com/img/products/6772/pcover/6772.jpg?v=1679667985",
        "capturas": [
            "https://gaming-cdn.com/images/products/6772/screenshot/resident-evil-4-pc-juego-steam-europe-wallpaper-1.jpg?v=1679667985",
            "https://gaming-cdn.com/images/products/6772/screenshot/resident-evil-4-pc-juego-steam-europe-wallpaper-2.jpg?v=1679667985",
            "https://gaming-cdn.com/images/products/6772/screenshot/resident-evil-4-pc-juego-steam-europe-wallpaper-3.jpg?v=1679667985",
            "https://gaming-cdn.com/images/products/6772/screenshot/resident-evil-4-pc-juego-steam-europe-wallpaper-4.jpg?v=1679667985",
            "https://gaming-cdn.com/images/products/6772/screenshot/resident-evil-4-pc-juego-steam-europe-wallpaper-5.jpg?v=1679667985"
        ],
        "video": "https://www.youtube.com/watch?v=Id2EaldBaWw",
        "precio": 60,
        "stock": 24,
        "categoriaId": 2,
        "subcategoriaId": 12
    },
    {
        "titulo": "Forspoken",
        "genero": "Acción y adventura",
        "descripcion": "No se sabe cómo, Frey Holland ha viajado desde la ciudad de Nueva York hasta el impresionante mundo de Athia, del que no puede salir. Con un brazalete parlante que aparece de forma inexplicable en su muñeca, Frey descubre que puede lanzar poderosos hechizos y usar magia para recorrer los vastos paisajes de Athia. Frey apoda a su nuevo amigo metálico «Cepo» y se dispone a encontrar el camino de vuelta a casa.",
        "imagen": "https://gaming-cdn.com/images/products/7111/616x353/forspoken-pc-juego-steam-europe-cover.jpg?v=1680774995",
        "fondo": "https://gaming-cdn.com/img/products/7111/pcover/7111.jpg?v=1680774995",
        "capturas": [
            "https://gaming-cdn.com/images/products/7111/screenshot/forspoken-pc-juego-steam-europe-wallpaper-1.jpg?v=1680774995",
            "https://gaming-cdn.com/images/products/7111/screenshot/forspoken-pc-juego-steam-europe-wallpaper-2.jpg?v=1680774995",
            "https://gaming-cdn.com/images/products/7111/screenshot/forspoken-pc-juego-steam-europe-wallpaper-3.jpg?v=1680774995",
            "https://gaming-cdn.com/images/products/7111/screenshot/forspoken-pc-juego-steam-europe-wallpaper-4.jpg?v=1680774995",
            "https://gaming-cdn.com/images/products/7111/screenshot/forspoken-pc-juego-steam-europe-wallpaper-5.jpg?v=1680774995"
        ],
        "video": "https://www.youtube.com/watch?v=AdZUrXCqUck",
        "precio": 80,
        "descuento": 45,
        "stock": 31,
        "categoriaId": 2,
        "subcategoriaId": 12
    }
  ]