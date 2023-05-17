import { log } from "console"

export function calcDiscount(precio: number, descuento: number) {
    if(!descuento) return precio

    const cantidadDescuento = (precio * descuento) / 100
    const precioFinal = precio - cantidadDescuento

    return precioFinal        
}