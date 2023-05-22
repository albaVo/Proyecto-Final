//hooks
import { Separator } from "@/components/shared";
import { useCategorias } from "@/hooks/useCategorias"
//layout
import { BasicLayout } from "@/layouts";
//mui
import { Container } from "@mui/material";
//next
import { useRouter } from "next/router"

interface Props {
  titulo: string
}

const CategoriaPage = () => {
  
  const router = useRouter();
  const titulo = router.query
  
  const { categorias: categoria, isLoading } = useCategorias(`/categorias/${titulo.id}`)
  console.log(categoria)

  return (
    <BasicLayout relative>
      <Container>
        <Separator height={50}/>

        <h2></h2>
      </Container>
    </BasicLayout>
  )
}

export default CategoriaPage