//styles
import styles from "./AddressForm.module.scss"
//mui
import { Box, Button, CircularProgress, TextField } from "@mui/material"
//react
import { useState } from "react";


type DirecciónData = {
    titulo: string,
    direccion: string,
    ciudad: string,
    codigo_postal: number,
    telefono: number,
    usuarioId: number
}

export const AddressForm = (props: any) => {

    const { onClose } = props

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form className={styles.form}>
            <TextField
                placeholder="Titulo de la dirección"
                fullWidth
            />

            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
                    <TextField
                        placeholder="Dirección"
                        fullWidth
                    />
                </Box>

                <Box sx={{width: '50%'}}>
                    <TextField
                        placeholder="Ciudad"
                        fullWidth
                    />
                </Box>
            </Box>

            <Box sx={{width: '100%', display: "flex"}}>
                <Box sx={{width: '50%', paddingRight: 1.5}}>
                    <TextField
                        placeholder="Código postal"
                        fullWidth
                    />
                </Box>

                <Box sx={{width: '50%'}}>
                    <TextField
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
