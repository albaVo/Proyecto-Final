//layout
import { BasicLayout } from '@/layouts';
//components
import { BannerRandomProduct, RandomProducts } from '@/components/home';
import { BannerAd, BarraInfo, Separator } from '@/components/shared';
//hooks
import { useProductos } from '@/hooks/useProductos';
//mui
import { Container } from '@mui/material';


export default function Home() {
  
  const { productos, isLoading } = useProductos('/productos')

  return (
    <>
      <BasicLayout>
        <BannerRandomProduct productos={productos}/>

        <Separator height={100}/>

        <Container>
          <RandomProducts productos={productos} title="Productos"/>
        </Container>

        <Separator height={100}/>

        <BarraInfo/>

        <Separator height={100}/>

        {/* Poner que devuelva videojuegos al azar */}
        <Container>
          <RandomProducts productos={productos} title="Videojuegos"/> 
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


        {/* Poner que devuelva productos del titulo al azar */}
        <Container>
          <RandomProducts productos={productos} title="Figuras y collecionables"/> 
        </Container>

        <Separator height={100}/>
      </BasicLayout>
    </>
  )
}





// const { user, logout } = useContext(AuthContext)

  // const [loggedIn, setLoggedIn] = useState(!!user)

  // const handleLogout = () => {
  //   logout()
  //   setLoggedIn(false)
  // }

  // const handleLogin = () => {
  //   // redirigir al usuario a la página de inicio de sesión
  //   window.location.href = '/auth/login'
  // }

  // const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
  // console.log(storedUser);



  // return

{/* {loggedIn && storedUser ? (
        <div>
          <p>Hola {storedUser.nombre} {storedUser.apellidos}</p>
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
        </div>
      ) : (
        <div>
          <a href='/auth/login' onClick={handleLogin}>Iniciar sesión</a>
        </div>
      )} */}
