
export class Cart {
    add(productoId: any) {
        localStorage.setItem('cart', JSON.stringify([productoId]))
    }

    getAll() {
        const response = localStorage.getItem('cart')

        if (!response) {
            return []
        } else {
            return JSON.parse(response)
        }

        return response
    }
}