//styles
import { AuthContext } from "@/context/auth"
import styles from "./UpdateForm.module.scss"
//mui
import { Box, Button, CircularProgress, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
//react
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { validations } from "@/utils"
import { VisibilityOff, Visibility } from "@mui/icons-material"


type UserData = {
  id: number,
  email: string,
  contraseña: string,
  nombre: string,
  apellidos: string,
  telefono: string
}

export const UpdateForm = () => {

  const { updateUser } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>()

  const [ showError, setShowError ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const onUpdateUser = async ( InputData: UserData ) => {
    setShowError(false)
    const { id, email, contraseña, nombre, apellidos } = InputData
    
    setIsSubmitting(true)

    const { hasError, message } = await updateUser(id, email, contraseña, nombre, apellidos)
    console.log(message);

    setIsSubmitting(false)

    if (hasError){
      setShowError(true);
      setErrorMessage(message || '');
      setTimeout( () => setShowError(false), 3000);
      return;
    }
  }

  //visualizar contraseña (ojo)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit(onUpdateUser) } noValidate>
      <Box sx={{width: '100%', display: "flex"}}>
        <Box sx={{width: '50%', paddingRight: 1.5}}>
          <TextField 
            { ...register('nombre')}
            error={!!errors.nombre}
            helperText = { errors.nombre?.message }
            placeholder="Nombre" fullWidth variant="outlined"
          />
        </Box>
        <Box sx={{width: '50%'}}>
          <TextField 
            { ...register('apellidos')}
            error={!!errors.apellidos}
            helperText = { errors.apellidos?.message }
            placeholder="Apellidos" fullWidth
          />
        </Box>
      </Box>

      <Box sx={{width: '100%', display: "flex"}}>
          <Box sx={{width: '50%', paddingRight: 1.5}}>
            <TextField 
              { ...register('email', {
                validate: validations.isEmail
              })}
              error={!!errors.email}
              helperText = { errors.email?.message }
              placeholder="Correo electrónico" type="email" fullWidth
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
