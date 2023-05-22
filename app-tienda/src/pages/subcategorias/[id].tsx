//hooks
import { useSubcategorias } from "@/hooks/useSubcategorias";
//layout
import { BasicLayout } from "@/layouts";
//mui
import { Container } from "@mui/material";
//next
import { useRouter } from "next/router"
//components
import { Separator } from "@/components/shared";


interface Props {
  titulo: string
}

const SubcategoriaPage = () => {
  
  const router = useRouter();
  const titulo = router.query
  
  const { subcategorias: subcategoria, isLoading } = useSubcategorias(`/subcategorias/${titulo.id}`)
  console.log(subcategoria)

  return (
    <BasicLayout relative>
      <Container>
        <Separator height={50}/>

        <h2></h2>
      </Container>
    </BasicLayout>
  )
}

export default SubcategoriaPage