//styles
import styles from "./AddressForm.module.scss"
//mui
import { Box, Button, CircularProgress, TextField } from "@mui/material"
//next
import { useRouter } from "next/router";
//react
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
// context
import { AuthContext } from "@/context/auth";


type DireccionData = {
    titulo: string,
    direccion: string,
    ciudad: string,
    codigo_postal: number,
    telefono: number,
    usuarioId: number
}

export const AddressForm = (props: any) => {

    const { onClose } = props

    const router = useRouter()

    const { createDireccion } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<DireccionData>()

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onCreateDireccion = async ( InputData: DireccionData ) => {
        setShowError(false)
        const { titulo, direccion, ciudad, codigo_postal, telefono, usuarioId } = InputData

        setIsSubmitting(true)

        const { hasError, message } = await createDireccion(titulo, direccion, ciudad, codigo_postal, telefono, usuarioId)
        console.log(message)

        setIsSubmitting(false)

        if (hasError){
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout( () => setShowError(false), 3000);
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit(onCreateDireccion)} className={styles.form}>
            <TextField
                { ...register('titulo', {
                    required: 'Título obligatorio'
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
                            required: 'Dirección obligatoria'
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
                            required: 'Ciudad obligatoria'
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
                            required: 'Código postal obligatorio'
                        })}
                        error={!!errors.codigo_postal}
                        helperText={errors.codigo_postal?.message}
                        placeholder="Código postal"
                        fullWidth
                    />
                </Box>

                <Box sx={{width: '50%'}}>
                    <TextField
                        { ...register('telefono', {
                            required: 'Teléfono obligatorio'
                        })}
                        error={!!errors.telefono}
                        helperText={errors.telefono?.message}
                        placeholder="Teléfono"
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
