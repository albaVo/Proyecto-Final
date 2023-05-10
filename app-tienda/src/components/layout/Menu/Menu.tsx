//styles
import styles from "./Menu.module.scss"
//react
import { FC, useState } from "react"
//interfaces
import { ICategoria } from "@/interfaces/ICategorias"
//next
import Link from "next/link"
import Image from "next/image";
//mui
import { Button, Input } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import classnames from "classnames";

interface Props {
  isOpenSearch: boolean,
  categoria: ICategoria[]
}

export const Menu:FC<Props> = ({isOpenSearch, categoria}) => {
    
    const [categorias, setCategorias] = useState(null)  
    const [showSearch, setShowSearch] = useState(false)   
    
    const openCloseSearch = () => setShowSearch((prevState) => !prevState)
    
    return (
      <div className={styles.categorias}>
        {categoriaData.map((categoria) => (
            <Link key={categoria.id} href={`/demo`}>
              <Image src={categoria.icono} alt={""} width={32} height={20}/>
              {categoria.titulo}
            </Link>
          ))}

          <Button 
            className={styles.search}
            sx={{position: 'absolute', top: 0, right: '-30px', backgroundColor: '#512da8', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 100, height: '100%', width: 60, border: 0}} 
            onClick={openCloseSearch}
          >
            <Search/>
          </Button> 

          <div className={classnames(styles.inputContainer, {
            [styles.active]: showSearch
          })}>
            <Input 
              id="search-games" 
              placeholder="Buscador" 
              className={styles.input} 
              autoFocus
            />
            <Close className={styles.closeInput} onClick={openCloseSearch}/>
          </div>
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
    "titulo": "Consolas",
    "icono": "https://cdn-icons-png.flaticon.com/512/3271/3271009.png"
  },
  {
    "id": 3,
    "titulo": "Coleccionables",
    "icono":  "https://cdn-icons-png.flaticon.com/512/6967/6967649.png"
  },
  {
    "id": 4,
    "titulo": "Cosplay",
    "icono": "https://cdn-icons-png.flaticon.com/512/72/72388.png"
  },
  {
    "id": 5,
    "titulo": "Tableros",
    "icono": "https://cdn-icons-png.flaticon.com/512/3351/3351767.png"
  }
]