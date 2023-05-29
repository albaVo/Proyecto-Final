//styles
import styles from "./Menu.module.scss"
//react
import { FC, useEffect, useState } from "react"
import React from "react";
//interfaces
import { ICategoria } from "@/interfaces/ICategorias"
//next
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
//mui
import { Button, IconButton, Input, Menu, MenuItem } from "@mui/material";
import { Close, KeyboardArrowDown, Search } from "@mui/icons-material";
//classnames
import classnames from "classnames";


interface Props {
  isOpenSearch: boolean,
  categoria: ICategoria[]
}

export const MenuTop:FC<Props> = ({isOpenSearch, categoria}) => {
    
    // const [categorias, setCategorias] = useState(null)  

    const router = useRouter()

    // Buscador
    const [showSearch, setShowSearch] = useState(isOpenSearch)   
    const [searchText, setSearchText] = useState("")
    const openCloseSearch = () => setShowSearch((prevState) => !prevState)

    useEffect(() => {
      setSearchText(router.query.s || "")
    }, [])
    

    const onSearch = (text: any) => {
      setSearchText(text)
      router.replace(`/search?s=${text}`)
    }


    // Menu subcategorias
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number>(-1)
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
      setAnchorEl(event.currentTarget);
      setOpenMenuIndex(openMenuIndex === index ? -1: index)
    };

    const handleClose = () => {
      setAnchorEl(null);
      setOpenMenuIndex(-1)
    };
     

    return (
      <div className={styles.categorias}>
        {categoria.map((categoria) => (
            <>
              <div key={categoria.id} className={styles.categoria}>
                <Image src={categoria.icono} alt={""} width={32} height={20}/>
                {categoria.titulo} 
              </div>

              <div className={styles.menu}>
                <IconButton 
                  className={styles.buttonArrow} 
                  onClick={(event) => handleClick(event, categoria.id)}
                >
                  <KeyboardArrowDown/>
                </IconButton> 

                <Menu
                  anchorEl={anchorEl}
                  open={openMenuIndex === categoria.id}
                  onClose={handleClose}
                >
                  {categoria.subcategorias?.map((subcategoria) => (
                    <MenuItem 
                      onClick={handleClose}
                      className={styles.menuItem}
                      href={`/subcategorias/${subcategoria.id}`} // hacer que funcione
                      key={subcategoria.id}
                    >
                      {subcategoria.titulo}
                    </MenuItem>
                  ))} 
                </Menu>    
              </div>    
            </>
          ))}

          <Button 
            className={styles.search}
            sx={{position: 'absolute', top: 0, right: '-30px', backgroundColor: '#512da8', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 100, height: '100%', width: 60, border: 0}} 
            onClick={openCloseSearch}
          >
            <Search sx={{border: '1px'}}/>
          </Button> 

          <div 
            className={classnames(styles.inputContainer, {
              [styles.active]: showSearch
            })}
          >
            <Input 
              id="search-products" 
              placeholder="Buscador" 
              className={styles.input} 
              autoFocus
              value={searchText}
              onChange={(_, data) => onSearch(data.value)}
            />
            <Close className={styles.closeInput} onClick={openCloseSearch}/>
          </div>
      </div>
    )
}