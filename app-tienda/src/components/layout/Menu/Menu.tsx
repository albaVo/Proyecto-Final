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
          categoria.map((categoria: ICategoria) => (
            <Link key={categoria.id} href={`/demo`}>
              <Image src={categoria.icono} width={150} height={60} alt={""}/>
              {categoria.titulo}
            </Link>
          ))
        }
      </div>
    )
}
