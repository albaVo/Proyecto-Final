// next
import { useRouter } from "next/router"
// react
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
// context
import { AuthContext } from "@/context/auth"
// cookies
import Cookies from "js-cookie"
// mui
import { Box, Button, Chip, CircularProgress, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { VisibilityOff, Visibility, ErrorOutline } from "@mui/icons-material"
// utils
import { validations } from "@/utils"


type FormData = {
    email: string,
    contraseña: string,
}

export const LoginForm = () => {

    const router = useRouter()

    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>()

    const [showError, setShowError] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onLoginUser = async ({email, contraseña}: FormData) => {
        
        setShowError(false)

        setIsSubmitting(true)

        const isValidLogin = await loginUser(email, contraseña)
        
        if (!isValidLogin) {
            setShowError(true)
            setTimeout( () => setShowError(false), 3000)
            setIsSubmitting(false)
            return
        }

        const roles = Cookies.get('rol')

        if ( roles == 'admin' ) {
            // router.replace('')
        } else {
            router.replace('/')
        }
    }

    //visualizar contraseña (ojo)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
            <Box>
                <Chip 
                    label="No se reconoce usuario/contraseña"
                    color="error"
                    icon= {<ErrorOutline />}
                    className="fadeIn"
                    sx={{ display: showError ? 'flex': 'none'}}
                />
                <TextField 
                    { ...register('email', {
                        required: 'Correo electrónico obligatorio',
                        validate: validations.isEmail
                    })}
                    error={!!errors.email}
                    helperText = { errors.email?.message }
                    placeholder="Correo electrónico" type="email" fullWidth
                    InputProps={{ 
                        endAdornment: <InputAdornment position="end">
                            <Typography variant='h5' sx={{color: '#B2ABAA'}}>*</Typography>
                        </InputAdornment>
                    }}
                />

                <TextField
                    { ...register('contraseña', {
                        required: 'Contraseña obligatoria',
                        minLength: { value: 6, message: 'Minimo 6 caracteres' }
                    })}
                    error={!!errors.contraseña}
                    helperText = { errors.contraseña?.message }
                    placeholder="Contraseña" fullWidth
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                sx={{color: "#B2ABAA"}}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </Box>

            <Button
                type='submit'
                sx={{width: '100%', marginLeft: 1.3, textTransform: 'none'}}
                disabled={isSubmitting || showError}
            >
                {isSubmitting ? <CircularProgress size={20} /> : 'Entrar'}
            </Button>
        </form>
    )
}
