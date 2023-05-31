//hooks
import { useSubcategorias } from "@/hooks/useSubcategorias";
//layout
import { BasicLayout } from "@/layouts";
//mui
import { Container } from "@mui/material";
//next
import { useRouter } from "next/router"
//components
import { GridProductos, NoResult, Separator } from "@/components/shared";


const SubcategoriaPage = (props: any) => {
  
  const router = useRouter();
  const { id } = router.query
  
  const { subcategorias: subcategoria, isLoading } = useSubcategorias(`/subcategorias/${id}`)
  console.log(subcategoria)

  const { productos } = props

  // const hasProducts = size(productos) > 0

  return (
    <BasicLayout relative subcategoria={subcategoria}>
      <Container>
        <Separator height={50}/>

        <h2>{subcategoria[0]?.titulo}</h2>

        {/* {hasProducts ? (
          <>
            <GridProductos productos={productos}/>
            <Separator height={30}/>
          </>
        ) : (
          <NoResult 
            text={`La subcategoria ${subcategoria.titulo} aun no tiene productos`}
          />
        )} */}

        <Separator height={100}/>
      </Container>
    </BasicLayout>
  )
}

export default SubcategoriaPage