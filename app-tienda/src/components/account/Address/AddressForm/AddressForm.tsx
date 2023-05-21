//styles
import styles from "./AddressForm.module.scss"
//mui
import { Box, Button, CircularProgress, TextField } from "@mui/material"
//next
import { useRouter } from "next/router";
//react
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// context
import { AuthContext } from "@/context/auth";


type DireccionData = {
    id?: number,
    titulo: string,
    direccion: string,
    ciudad: string,
    codigo_postal: number,
    telefono: number,
    usuarioId: number
}

export const AddressForm = (props: any) => {

    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')

    const { onClose, isEditMode, id } = props

    const router = useRouter()

    const { createDireccion, updateDireccion } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<DireccionData>()

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onCreateDireccion = async ( InputData: DireccionData ) => {
        setShowError(false)
        const { titulo, direccion, ciudad, codigo_postal, telefono } = InputData

        // const { id } = storedUser.direcciones

        setIsSubmitting(true)

        //obtener el id del usuario logeuado desde el localStorage
        // const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
        const usuarioId = storedUser.id

        if (!isEditMode) {
            const { hasError, message, id } = await createDireccion (
                titulo, 
                direccion, 
                ciudad, 
                codigo_postal, 
                telefono, 
                usuarioId
            )              
            console.log(message)

            if (!hasError) {
                const updatedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}');
                updatedUser.direcciones.push({
                  id,
                  titulo,
                  direccion,
                  ciudad,
                  codigo_postal,
                  telefono,
                  usuarioId
                });
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
        } else {
            const { hasError, message } = await updateDireccion(
                id,
                titulo,
                direccion,
                ciudad,
                codigo_postal,
                telefono,
                usuarioId
            )
            console.log(message)

            if (!hasError) {
                
                let updatedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}');

                if (updatedUser) {
                    updatedUser.direcciones = updatedUser.direcciones.filter((dir: { id: number }) => dir.id !== id);

                    updatedUser.direcciones.push({
                        id,
                        titulo,
                        direccion,
                        ciudad,
                        codigo_postal,
                        telefono,
                        usuarioId
                    });

                    localStorage.setItem('user', JSON.stringify(updatedUser));
                }
            }
        }

        setIsSubmitting(false)
        onClose()        
    }
   
    return (
        <form onSubmit={handleSubmit(onCreateDireccion)} className={styles.form}>          
            <TextField
                { ...register('titulo', {
                    required: isEditMode ? false : 'Titulo obligatorio'
                })}
                error={!!errors.titulo}
                helperText={errors.titulo?.message}
                placeholder="Titulo de la dirección"
                fullWidth
            />

            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
                    <TextField
                        { ...register('direccion', {
                            required: isEditMode ? false : 'Dirección obligatoria'
                        })}
                        error={!!errors.direccion}
                        helperText={errors.direccion?.message}
                        placeholder="Dirección"
                        fullWidth
                    />
                </Box>

                <Box sx={{width: '50%'}}>
                    <TextField
                        { ...register('ciudad', {
                            required: isEditMode ? false : 'Ciudad obligatoria'
                        })}
                        error={!!errors.ciudad}
                        helperText={errors.ciudad?.message}
                        placeholder="Ciudad"
                        fullWidth
                    />
                </Box>
            </Box>

            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
                    <TextField
                        { ...register('codigo_postal', {
                            required: isEditMode ? false : 'Código postal obligatorio',
                            valueAsNumber: true,
                        })}
                        error={!!errors.codigo_postal}
                        helperText={errors.codigo_postal?.message}
                        placeholder="Código postal"
                        // type="number"
                        fullWidth
                    />
                </Box>

                <Box sx={{width: '50%'}}>
                    <TextField
                        { ...register('telefono', {
                            required: isEditMode ? false : 'Teléfono obligatorio',
                            valueAsNumber: true,
                        })}
                        error={!!errors.telefono}
                        helperText={errors.telefono?.message}
                        placeholder="Teléfono"
                        // type="number"
                        fullWidth
                    />
                </Box>
            </Box>

            <Button
                type='submit'
                sx={{width: '100%', textTransform: 'none'}}
                disabled={isSubmitting}
            >
                {isSubmitting ? <CircularProgress size={20} /> : 'Enviar'}
            </Button>
        </form>
    )
}
