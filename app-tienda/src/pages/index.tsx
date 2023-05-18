//layout
import { BasicLayout } from '@/layouts';
//components
import { BannerRandomGame, RandomGames } from '@/components/home';
import { BarraInfo, Separator } from '@/components/shared';
//hooks
import { useProductos } from '@/hooks/useProductos';
//mui
import { Container } from '@mui/material';


export default function Home() {
  
  const { productos, isLoading } = useProductos('/productos')

  return (
    <>
      <BasicLayout>
        <BannerRandomGame productos={productos}/>

        <Separator height={100}/>

        <Container>
          <RandomGames productos={productos} title="Productos"/>
        </Container>

        <Separator height={100}/>

        <BarraInfo/>

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
