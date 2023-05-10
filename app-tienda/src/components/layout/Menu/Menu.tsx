//styles
import styles from "./Menu.module.scss"
//react
import { FC, useEffect, useState } from "react"
//interfaces
import { ICategoria } from "@/interfaces/ICategorias"
//next
import Link from "next/link"
import Image from "next/image";
import { CardMedia } from "@mui/material";

interface Props {
  isOpenSearch: boolean,
  categoria: ICategoria[]
}

export const Menu:FC<Props> = ({isOpenSearch, categoria}) => {
    
    const [categorias, setCategorias] = useState(null)    

    useEffect(() => {
      (async () => {
        try {
            // 
        } catch (error) {
            console.error(error);
        }
      })()
    }, [])
    
    
    return (
      <div className={styles.categorias}>
        {
          categoriaData.map((categoria) => (
            <Link key={categoria.id} href={`/demo`}>
              <Image src={categoria.icono} width={20} height={20} alt={""}/>
              {categoria.titulo}
            </Link>
          ))
        }
      </div>
    )
}


const categoriaData = [
  {
    "id": 1,
    "titulo": "Videojuegos",
    "icono": "https://cdn-icons-png.flaticon.com/512/4693/4693547.png"
  },
  {
    "id": 2,
    "titulo": "Consolas y accesorios",
    "icono": "https://cdn-icons-png.flaticon.com/512/3271/3271009.png"
  },
  {
    "id": 3,
    "titulo": "Figuras y coleccionables",
    "icono":  "https://cdn-icons-png.flaticon.com/512/6967/6967649.png"
  },
  {
    "id": 4,
    "titulo": "Cosplay y disfraces",
    "icono": "https://cdn-icons-png.flaticon.com/512/72/72388.png"
  },
  {
    "id": 5,
    "titulo": "Juegos de mesa y cartas",
    "icono": "https://cdn-icons-png.flaticon.com/512/3351/3351767.png"
  }
]