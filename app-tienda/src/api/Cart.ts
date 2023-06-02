import { forEach } from "lodash"

export class Cart {
    add(productoId: any) {
        const productos = this.getAll()
        const objIndex = productos.findIndex((producto) => producto.id === productoId)

        if(objIndex < 0) {
            productos.push({ id: productoId, quantity: 1})
        } else {
            const producto = productos[objIndex]
            producto[objIndex].quantity = producto.quantity + 1
        }

        localStorage.setItem('cart', JSON.stringify(productos))
    }

    getAll() {
        // const response = localStorage.getItem('cart')

        // if (!response) {
        //     return []
        // } else {
        //     return JSON.parse(response)
        // }

        // return response
    }

    count() {
        const response = this.getAll()
        let count = 0

        forEach(response, (item) => {
            count += item.quantity
        })

        return count
    }

    changeQuantity(productoId, quantity) {
        const productos = this.getAll()
        const objIndex = productos.findIndex((producto) => producto.id === productoId)

        productos[objIndex].quantity = quantity

        localStorage.setItem('cart', JSON.stringify(productos))
    }

    delete(productoId) {
        const productos = this.getAll()
        const updateProductos = productos.filter((producto) => producto.id !== productoId)

        localStorage.setItem('cart', JSON.stringify(updateProductos))
    }
}