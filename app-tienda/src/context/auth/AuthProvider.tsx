// interfaces
import { IUsuario } from "@/interfaces/IUsuarios";
import { IRespuestaApiAuth } from "./interfaces/IRespuestaAuthApi";
// react
import { FC, useEffect, useReducer, useState } from "react";
// api
import tiendaApi from "@/api/TiendaApi";
// cookie
import Cookies from "js-cookie";
// axios
import axios from "axios";
// auth
import { authReducer } from "./authReducer";
import { AuthContext } from "./AuthContext";


export interface AuthState {
    isLoggedIn: boolean,
    user?: IUsuario
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

interface Props {
    children: any
}

export const AuthProvider:FC<{children:any}> = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect( () => {
        const token = checkToken()
        // const token = localStorage.getItem('token')

        if (!token) {
            logout()
            return
        } 
    }, [])

    const checkToken = async() => {
        
    }  



    // USUARIOS
    const registerUser = async (email: string, contraseña: string, nombre: string, apellidos: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.post('/auth/register', {email, contraseña, nombre, apellidos})
            const { token, user } = data
            Cookies.set('token', token)
            Cookies.set('rol', user.roles)
            dispatch({ type: '[Auth] - Login', payload: user })
            return {
                hasError: false,
                message: 'Usuario creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el usuario, inténtalo de nuevo'
            }
        }
    }

    const loginUser = async (email: string, contraseña: string):Promise<boolean> => {
        try {
            const { data } = await tiendaApi.post('/auth/login', {email, contraseña})
            // console.log('data', data);
            
            const { token, user } = data   
            // console.log('user', user);
                    
            Cookies.set('token', token)
            Cookies.set('email', user.email)
            Cookies.set('rol', user.roles)   

            // guardar el token en el localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({ type: '[Auth] - Login', payload: user })

            return true
        } catch (error) {
            return false
        }
    }

    const logout = () => {
        // eliminar el token del localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)
    }

    const updateUser = async (id: number, email: string, nombre: string, apellidos: string, contraseña: string):Promise<IRespuestaApiAuth> => {
        try {
            const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
            console.log(storedUser);
            
            // const { data } = await tiendaApi.patch(`/auth/${id}`, {contraseña, apellidos, email, nombre})
            const { data } = await tiendaApi.patch(`/auth/${id}`, {
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                contraseña: contraseña
            });
              
            console.log(data)       

            return {
                hasError: false,
                message: 'Usuario modificado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede modificar el usuario, inténtalo de nuevo'
            }
        }
    }

    // DIRECCIONES
    const createDireccion = async (titulo: string, direccion: string, ciudad: string, codigo_postal: number, telefono: number, usuarioId: number):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.post('/direcciones', {titulo, direccion, ciudad, codigo_postal, telefono, usuarioId})
            return {
                hasError: false,
                message: 'Dirección creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear la dirección, inténtalo de nuevo'
            }
        }
    }


    return (
        <AuthContext.Provider value={{
            ...state,
            registerUser,
            loginUser,
            logout,
            updateUser,
            createDireccion
        }}>
            { children }
        </AuthContext.Provider>
    )
}
