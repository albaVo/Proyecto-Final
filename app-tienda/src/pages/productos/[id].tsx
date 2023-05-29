import Info from "@/components/account/Info/Info"
import { HeaderWallpaper, Media, Panel } from "@/components/producto"
import { Separator } from "@/components/shared"
import { BasicLayout } from "@/layouts"

const ProductoPage = (props: any) => {

    const { producto } = props

  return (
    <>
        <BasicLayout>
            <HeaderWallpaper image={producto.fondo}/>
            <Panel productoId={producto.id} producto={producto}/>
        
            <Separator height={50}/>

            <Info producto={producto}/>

            <Separator height={30}/>

            <Media 
              video={producto.video} 
              capturas={producto.capturas}
            />

            <Separator height={50}/>
        </BasicLayout>
    </>
  )
}

export default ProductoPage