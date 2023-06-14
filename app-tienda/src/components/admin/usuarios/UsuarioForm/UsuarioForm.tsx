import { AuthContext } from "@/context"
import { InputText } from "primereact/inputtext"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

type UsuarioData = {
    id: number,
    email: string,
    contraseña: string,
    nombre: string,
    apellidos: string,
}

export const UsuarioForm = (props: any) => {
    
    const { onClose, isEditMode, id } = props

    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<UsuarioData>()

    const [ showError, setShowError ] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const onCreateUsuario = async ( InputData: UsuarioData ) => {
        setShowError(false)
        const { email, contraseña, nombre, apellidos } = InputData

        setIsSubmitting(true)

        if (!isEditMode) {
            const { hasError, message, id } = await createUser (
                email,
                contraseña,
                nombre,
                apellidos
            )
            console.log(message);
        } else {
            const { hasError, message } = await updateUser (
                id,
                email,
                contraseña,
                nombre,
                apellidos
            )
            console.log(message)
        }
        
        setIsSubmitting(false)
        onClose()
    }
    
    return (
        <form onSubmit={handleSubmit(onCreateUsuario)}>
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label>Email</label>
                        <InputText type="text" {...register('email')}/>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label>Contraseña</label>
                        <InputText type="text" {...register('contraseña')}/>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label>Nombre</label>
                        <InputText type="text" {...register('nombre')}/>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label>Apellidos</label>
                        <InputText type="text" {...register('apellidos')}/>
                    </div>
                </div>
            </div>
        </form>
    )
}
