//react
import { useContext, useEffect, useState } from 'react'
//context
import { AuthContext } from '@/context/auth'
//layout
import { BasicLayout } from '@/layouts';


export default function Home() {
  
  return (
    <BasicLayout>
      <h1 style={{paddingTop: 100}}>SHOP</h1>
    </BasicLayout>
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
