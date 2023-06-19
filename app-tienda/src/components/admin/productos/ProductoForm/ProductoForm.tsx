//react
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
//primereact
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from "primereact/button";
//context
import { AuthContext } from "@/context"
//mui
import { CircularProgress, MenuItem, TextField } from "@mui/material";
import { useCategorias } from "@/hooks/useCategorias";
import { useSubcategorias } from "@/hooks/useSubcategorias";


type ProductoData = {
    id?: number,
    titulo: string,
    genero: string,
    descripcion: string,
    imagen: string,
    fondo: string,
    capturas: string,
    video: string,
    precio: number,
    descuento: number,
    stock: number,
    categoriaId: number,
    subcategoriaId: number
}

export const ProductoForm = (props: any) => {
    
    const { onClose, isEditMode, id } = props
    
    const { categorias } = useCategorias('/categorias')
    const { subcategorias } = useSubcategorias('/subcategorias')

    const { createProducto, updateProducto } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<ProductoData>()

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onCreateProducto = async ( InputData: ProductoData ) => {
        setShowError(false)
        const { titulo, genero, descripcion, imagen, fondo, capturas, video, precio, descuento, stock, categoriaId, subcategoriaId } = InputData

        setIsSubmitting(true)

        if (!isEditMode) {
            const { hasError, message, id } = await createProducto (
                titulo,
                genero,
                descripcion,
                imagen,
                fondo,
                capturas,
                video,
                precio,
                descuento,
                stock,
                categoriaId,
                subcategoriaId
            )
            console.log(message);
        } else {
            const { hasError, message } = await updateProducto (
                id,
                titulo,
                genero,
                descripcion,
                imagen,
                fondo,
                capturas,
                video,
                precio,
                descuento,
                stock,
                categoriaId,
                subcategoriaId
            )
            console.log(message)
        }
        
        setIsSubmitting(false)
        onClose()
    }

    const valuesGenero = [
        { value: '', label: ''},
        { value: 'AYA', label: 'Acción y adventura'},
        { value: 'DEPO', label: 'Deportes'},
        { value: 'EST', label: 'Estrategia'},
        { value: 'SIM', label: 'Simulación'},
        { value: 'PLA', label: 'Plataformas'},
        { value: 'RV', label: 'Realidad virtual'}
    ]
 
    const valuesCategoria = [
        { value: '', label: '' },
        ...categorias.map((categoria) => ({
          value: categoria.id,
          label: categoria.titulo,
        })),
    ];
      

    const valuesSubcategoria = [
        { value: '', label: '' },
        ...subcategorias.map((subcategoria) => ({
          value: subcategoria.id,
          label: subcategoria.titulo,
        })),
    ]

    return (
        <form onSubmit={handleSubmit(onCreateProducto)}>
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-4">
                        <label>Titulo</label>
                        <InputText type="text" {...register('titulo')}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label>Imagen</label>
                        <InputText type="text" {...register('imagen')}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label>Fondo</label>
                        <InputText type="text" {...register('fondo')}/>
                    </div>
                    <div className="field col-12 ">
                        <label>Descripcion</label>
                        <InputTextarea rows={4} {...register('descripcion')}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label>Capturas</label>
                        <InputTextarea {...register('capturas')}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label>Video</label>
                        <InputText type="text" {...register('video')}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label>Genero</label>
                        <div className="textFieldDropdown">
                            <Select type="text"
                                select
                                {...register('genero')}
                            >
                                {valuesGenero.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label>Precio</label>
                        <div className="p-inputgroup">
                            <InputNumber {...register('precio')} mode="currency" currency="EUR" />
                            <span className="p-inputgroup-addon">€</span>
                        </div>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label>Descuento</label>
                        <div className="p-inputgroup">
                            <InputNumber {...register('descuento')}/>
                            <span className="p-inputgroup-addon">%</span>
                        </div>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label>Stock</label>
                        <InputNumber {...register('stock')}/>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label>Categoria</label>
                        <div className="textFieldDropdown2">
                            <TextField
                                select
                                {...register('categoriaId')}
                            >
                                {valuesCategoria.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label>Subcategoria</label>
                        <div className="textFieldDropdown2">
                            <TextField
                                select
                                {...register('subcategoriaId')}
                            >
                                {valuesSubcategoria.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    
                    <Button className="button" disabled={isSubmitting}>
                        {isSubmitting ? <CircularProgress size={20} /> : 'Enviar'}
                    </Button>
                </div>
            </div>
        </form>
    )
}
