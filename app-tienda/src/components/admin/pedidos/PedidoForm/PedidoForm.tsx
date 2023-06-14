//context
import { AuthContext } from "@/context"
//react
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import React from "react";
//primereact
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
//mui
import { CircularProgress } from "@mui/material";


type PedidoData = {
  id?: number,
  fecha_pedido?: Date,
  precio_total: number,
  direccionId: number,
  usuarioId: number,
  productosId: number
}


export const PedidoForm = (props: any) => {
  
  const { onClose, id } = props

  const [calendarValue, setCalendarValue] = useState(new Date());
  const { updatePedido } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm<PedidoData>()

  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onUpdatePedido = async ( InputData: PedidoData ) => {
    setShowError(false)
    const { fecha_pedido, precio_total, direccionId, usuarioId, productosId } = InputData

    setIsSubmitting(true)

    const { hasError, message } = await updatePedido (
      id,
      fecha_pedido,
      precio_total,
      direccionId,
      usuarioId,
      productosId
    )
    console.log(message)

    setIsSubmitting(false)
    onClose()
  }
  
  return (
    <form onSubmit={handleSubmit(onUpdatePedido)}>
      <div className="card">
        <div className="p-fluid formgrid grid">
          <div className="field col-12 md:col-6">
            <label>Fecha pedido</label>
            <Calendar 
              showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}
              // {...register('fecha_pedido')}
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Precio total</label>
            <div className="p-inputgroup">
              <InputText type="number" {...register('precio_total')}/>
              <span className="p-inputgroup-addon">€</span>
            </div>
          </div>
          <div className="field col-12 md:col-4">
            <label>Direccion</label>
            <InputText type="text" {...register('direccionId')}/>
          </div>
          <div className="field col-12 md:col-4">
            <label>Usuario</label>
            <InputText type="text" {...register('usuarioId')}/>
          </div>
          <div className="field col-12 md:col-4">
            <label>Productos Id</label>
            <InputText type="text" {...register('productosId')}/>
          </div>

          <Button className="button" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={20} /> : 'Enviar'}
          </Button>
        </div>
      </div>
    </form>
  )
}
