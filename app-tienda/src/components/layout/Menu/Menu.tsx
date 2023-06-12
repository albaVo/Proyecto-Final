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
import { Button, IconButton, Input, Menu, MenuItem, useTheme } from "@mui/material";
import { Close, KeyboardArrowDown, Search } from "@mui/icons-material";
//classnames
import classnames from "classnames";
//hooks
import { useProductos } from "@/hooks/useProductos";


interface Props {
  isOpenSearch: boolean,
  categoria: ICategoria[]
}

export const MenuTop:FC<Props> = ({isOpenSearch, categoria}) => {

    const { productos, isLoading } = useProductos('/productos')
    const [products, setProducts] = useState([])

    const router = useRouter()
    const theme = useTheme()

    // Buscador
    const [showSearch, setShowSearch] = useState(isOpenSearch)
    const [searchText, setSearchText] = useState("")
    const openCloseSearch = () => setShowSearch((prevState) => !prevState)

    useEffect(() => {
      setSearchText(router.query.titulo || "")
    }, [])


    const onSearch = (event) => {
      const text = event.target.value
      setSearchText(text)
      router.replace(`/search?titulo=${text}`)
      
      fetch(`http://localhost:3001/api/productos?titulo=${text}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.error(error)
        })
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
                <Link href={`/categorias/${categoria.id}`} passHref> 
                  <Image src={categoria.icono} alt={""} width={32} height={20}/>
                  {categoria.titulo}
                </Link>
              </div>

              <div className={styles.menu}>
                <IconButton
                  className={styles.buttonArrow}
                  onClick={(event) => handleClick(event, categoria.id)}
                >
                  <KeyboardArrowDown sx={{fill: 'white'}}/>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={openMenuIndex === categoria.id}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: theme.spacing(1.5),
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: theme.spacing(-0.5),
                        mr: theme.spacing(1),
                      }
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {categoria.subcategorias?.map((subcategoria) => (
                    <MenuItem key={subcategoria.id}>
                      <Link href={`/subcategorias/${subcategoria.id}`} passHref>
                        {subcategoria.titulo}
                      </Link>
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
              onChange={onSearch}
            />
            <Close className={styles.closeInput} onClick={openCloseSearch}/>
          </div>
      </div>
    )
}