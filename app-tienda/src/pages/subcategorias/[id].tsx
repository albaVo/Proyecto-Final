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


interface Props {
  titulo: string
}

const SubcategoriaPage = (props: any) => {
  
  const router = useRouter();
  const titulo = router.query
  
  const { subcategorias: subcategoria, isLoading } = useSubcategorias(`/subcategorias/${titulo.id}`)
  console.log(subcategoria)

  const { productos } = props

  // const hasProducts = size(productos) > 0

  return (
    <BasicLayout relative>
      <Container>
        <Separator height={50}/>

        <h2>Titulo subcategoria</h2>

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