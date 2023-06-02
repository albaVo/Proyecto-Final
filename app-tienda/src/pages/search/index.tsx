//layouts
import { BasicLayout } from '@/layouts'
//components
import { GridProductos, NoResult, Separator } from '@/components/shared'
//mui
import { Container } from '@mui/material'
//lodash
import { size } from 'lodash'
//react
import React, { useEffect } from 'react'
//hooks
import { useProductos } from '@/hooks/useProductos'


const SearchPage = (props: any) => {

  const { searchText, productos } = props
  console.log(props);
  
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



// ------------------------------------------------------------------
// export async function getServerSideProps(context) {
//   const { query: {titulo} } = context

//   const { productos, isLoading } = useProductos(`/productos?titulo=${titulo}`)

//   return {
//     props: {
//       productos: productos,
//       searchText: null
//     }
//   }  
// }
export async function getServerSideProps(context) {
  const { query: { titulo } } = context;

  try {
    const response = await fetch(`http://localhost:3000/api/productos?titulo=${titulo}`);
    const data = await response.json();

    return {
      props: {
        productos: data,
        searchText: titulo || null
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        productos: [],
        searchText: titulo || null
      }
    };
  }
}
