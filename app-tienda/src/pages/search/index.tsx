//layouts
import { GridProductos, NoResult, Separator } from '@/components/shared'
import { BasicLayout } from '@/layouts'
import { Container } from '@mui/material'
//react
import React, { useEffect } from 'react'

const SearchPage = (props: any) => {

  const { searchText } = props
  const hasResult = size(productos) > 0

  useEffect(() => {
    document.getElementById("search-products")?.focus()
  }, [])
  

  return (
    <>
      <BasicLayout relative isOpenSearch={true}>
        <Container>
          <Separator height={50}/>

          <h2>Buscando: {searchText}</h2>
          {hasResult ? (
            <>
              <GridProductos productos={productos}/>
              <Separator height={30}/>
            </>
          ) : (
            <NoResult text="No se han encontrado resultados"/>
          )}
        </Container>
      </BasicLayout>
    </>
  )
}

export default SearchPage