
export class Cart {
    add(productoId: any) {
        localStorage.setItem('cart', JSON.stringify([productoId]))
    }
}