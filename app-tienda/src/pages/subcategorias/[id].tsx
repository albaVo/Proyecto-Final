//hooks
import { useSubcategorias } from "@/hooks/useSubcategorias";
//layout
import { BasicLayout } from "@/layouts";
//mui
import { Container, Pagination } from "@mui/material";
//next
import { useRouter } from "next/router"
//components
import { GridProductos, NoResult, Separator } from "@/components/shared";
//lodash
import { size } from "lodash";


const SubcategoriaPage = () => {
  
  const router = useRouter();
  const { id } = router.query
  
  const { subcategorias: subcategoria, isLoading } = useSubcategorias(`/subcategorias/${id}`)

  const hasProducts = subcategoria.productos?.length > 0


  return (
    <BasicLayout relative subcategoria={subcategoria}>
      <Container>
        <Separator height={50}/>

        <h2>{subcategoria.titulo}</h2>

        {hasProducts ? (
          <>
            <GridProductos productos={subcategoria.productos}/>
            <Separator height={30}/>
          </>
        ) : (
          <NoResult 
            text={`La subcategoria ${subcategoria.titulo} aun no tiene productos`}
          />
        )}

        <Separator height={100}/>
      </Container>
    </BasicLayout>
  )
}

export default SubcategoriaPage