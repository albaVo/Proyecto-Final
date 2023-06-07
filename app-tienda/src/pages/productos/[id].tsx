//components
import { HeaderWallpaper, Info, Media, Panel } from "@/components/producto"
import { Seo, Separator } from "@/components/shared"
//hooks
import { useProductos } from "@/hooks/useProductos"
//layout
import { BasicLayout } from "@/layouts"
//next
import { useRouter } from "next/router"


const ProductoPage = () => {
 
  // const { producto } = props
  const router = useRouter()
  const { id } = router.query
  
  const { productos: product, isLoading } = useProductos(`/productos/${id}`)
  // console.log(product);
  

  return (
    <>
      <Seo title={product.titulo}/>

      <BasicLayout>
        <HeaderWallpaper image={product.fondo}/>
        <Panel productoId={product.id} product={product}/>
        
        <Separator height={50}/>

        <Info product={product}/>

        <Separator height={30}/>

        {product.video || product.capturas ? (
          <Media video={product.video} capturas={product.capturas} />
        ) : null}

        <Separator height={50}/>
      </BasicLayout>
    </>
  )
}

export default ProductoPage