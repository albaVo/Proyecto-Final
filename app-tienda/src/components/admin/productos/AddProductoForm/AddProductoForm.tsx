//styles
import styles from "./addProductoForm.module.scss"
//react
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
//context
import { AuthContext } from "@/context"


type ProductoData = {
    id?: number,
    titulo: string,
    genero?: string,
    descripcion: string,
    imagen?: string,
    fondo?: string,
    capturas?: string[]
    video?: string,
    precio: number,
    descuento?: number,
    stock: number,
    categoriaId: number,
    subcategoriaId: number
}

export const AddProductoForm = (props: any) => {
    
    const { onClose, isEditMode, id } = props

    const { createProducto } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<ProductoData>()

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onCreateProducto = async ( InputData: ProductoData ) => {
        setShowError(false)
        const { titulo, genero, descripcion, imagen, fondo, capturas, video, precio, descuento, stock, categoriaId, subcategoriaId } = InputData

        setIsSubmitting(true)

        const { hasError, message, id } = await 
    }

    return (
        <div>addProductoForm</div>
    )
}
