//hooks
import { useCategorias } from "@/hooks/useCategorias";
//layout
import { BasicLayout } from "@/layouts";
//mui
import { Container, Pagination } from "@mui/material";
//next
import { useRouter } from "next/router"
//components
import { GridProductos, NoResult, Seo, Separator } from "@/components/shared";


const CategoriasPage = () => {
  
  const router = useRouter();
  const { id } = router.query
  
  const { categorias: categoria, isLoading } = useCategorias(`/categorias/${id}`)

  const hasProducts = categoria.productos?.length > 0


  return (
    <>
      {/* <Seo title={`Productos de ${categoria.titulo}`}/> */}

      <BasicLayout relative categoria={categoria}>
        <Container>
          <Separator height={50}/>

          <h2>{categoria.titulo}</h2>

          {hasProducts ? (
            <>
              <GridProductos productos={categoria.productos}/>
              <Separator height={30}/>
            </>
          ) : (
            <NoResult 
              text={`La categoria ${categoria.titulo} aun no tiene productos`}
            />
          )}

          <Separator height={100}/>
        </Container>
      </BasicLayout>
    </>
  )
}

export default CategoriasPage