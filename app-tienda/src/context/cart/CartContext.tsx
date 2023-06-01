import { Cart } from "@/api/Cart";
import { createContext, useEffect, useState,  } from "react";

const cartCtrl = new Cart()

export const CartContext = createContext()

export function CartProvider(props: any) {
    const { children } = props
    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const response = cartCtrl.getAll()
        setCart(response)
    }, [])      
    
    const addCart = (productoId: any) => {
        cartCtrl.add(productoId)
    }

    const data = {
        cart,
        addCart,
        total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItem: () => {}
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}