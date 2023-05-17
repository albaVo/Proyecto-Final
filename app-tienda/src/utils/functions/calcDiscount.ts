export function calcDiscount(precio: any, descuento: any) {
    if(!descuento) return precio

    const cantidadDescuento = (precio * descuento) / 100
    const precioFinal = precio - cantidadDescuento

    return Number(precioFinal.toFixed(2))        
}