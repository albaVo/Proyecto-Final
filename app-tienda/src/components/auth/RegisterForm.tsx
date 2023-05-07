//mui
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, TextField, Button, IconButton, CircularProgress, InputAdornment, Typography } from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
//react
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
//next
import { useRouter } from "next/router";
//context
import { AuthContext } from "@/context/auth";
//validation
import { validations } from "@/utils";


type UserData = {
    email: string,
    contraseña: string,
    nombre: string,
    apellidos: string
}

export const RegisterForm = () => {

    const router = useRouter()

    const { registerUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm<UserData>()

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onRegisterUser = async ( InputData: UserData ) => {
        setShowError(false)
        const { email, contraseña, nombre, apellidos } = InputData

        setIsSubmitting(true) // activar indicador de carga

        const { hasError, message } = await registerUser(email, contraseña, nombre, apellidos)
        console.log(message);

        setIsSubmitting(false) // desactivar indicador de carga
        
        if (hasError){
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout( () => setShowError(false), 3000);
            return;
        }

        // router.replace('/auth');
        router.push('/auth/login');
    }


    //visualizar contraseña (ojo)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <form onSubmit={ handleSubmit(onRegisterUser) } noValidate>
            {/* <TextField label="Correo Electronico" variant='filled' fullWidth/> */}
            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
                    <TextField 
                        { ...register('nombre', {
                            required: 'Nombre obligatorio'
                        })}
                        error={!!errors.nombre}
                        helperText = { errors.nombre?.message }
                        placeholder="Nombre" fullWidth variant="outlined"
                        InputProps={{ 
                            endAdornment: <InputAdornment position="end">
                                <Typography variant='h5' sx={{color: '#B2ABAA'}}>*</Typography>
                            </InputAdornment>
                        }}
                    />
                </Box>
                <Box sx={{width: '50%'}}>
                    <TextField 
                        { ...register('apellidos', {
                            required: 'Apellido/s obligatorio/s'
                        })}
                        error={!!errors.apellidos}
                        helperText = { errors.apellidos?.message }
                        placeholder="Apellidos" fullWidth
                        InputProps={{ 
                            endAdornment: <InputAdornment position="end">
                                <Typography variant='h5' sx={{color: '#B2ABAA'}}>*</Typography>
                            </InputAdornment>
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
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
                </Box>
                <Box sx={{width: '50%'}}>
                    {/* <OutlinedInput placeholder="Contraseña" type="password" fullWidth/> */}
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
            </Box>

            <Button
                type='submit'
                sx={{width: '100%', marginLeft: 1.3, textTransform: 'none'}}
                disabled={isSubmitting}
            >
                {isSubmitting ? <CircularProgress size={20} /> : 'Registrarse'}
            </Button>
        </form>
    )
}