//layout
import { BasicLayout } from '@/layouts';
//components
import { BannerRandomProduct, RandomProducts } from '@/components/home';
import { BannerAd, BarraInfo, Separator } from '@/components/shared';
//hooks
import { useProductos } from '@/hooks/useProductos';
//mui
import { Container } from '@mui/material';
import { useCart } from '@/hooks/useCart';


export default function Home() {
  
  const { productos, isLoading } = useProductos('/productos')

  return (
    <>
      <BasicLayout>
        <BannerRandomProduct productos={productos}/>

        <Separator height={100}/>

        <Container>
          <RandomProducts productos={productos} title="Productos" cantidad={6}/>
        </Container>

        <Separator height={100}/>

        <BarraInfo/>

        <Separator height={100}/>

        <Container>
          <RandomProducts productos={productos} title="Videojuegos" cantidad={6} categoria={2}/> 
        </Container>

        <Separator height={100}/>

        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otros productos y elige el tuyo!"
          titleLink="Entrar ahora"
          link="/account"
          image="/images/anuncio.png"
        />

        <Separator height={50}/>

        <Container>
          <RandomProducts productos={productos} title="Figuras y collecionables" cantidad={6} categoria={4}/> 
        </Container>

        <Separator height={100}/>
      </BasicLayout>
    </>
  )
}