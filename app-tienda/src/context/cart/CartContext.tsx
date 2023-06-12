//api
import { Cart } from "@/api/Cart";
//react
import { createContext, useEffect, useState,  } from "react";

const cartCtrl = new Cart()

export const CartContext = createContext()

export function CartProvider(props: any) {
    const { children } = props
    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(cartCtrl.count())

    useEffect(() => {
        setCart(cartCtrl.getAll())        
    }, [])      
    
    const addCart = (productoId) => {
        cartCtrl.add(productoId)
        refreshTotalCart()        
    }

    const changeQuantityItem = (productoId, quantity) => {
        cartCtrl.changeQuantity(productoId, quantity)
        refreshTotalCart()
    }

    const deleteItem = (productoId) => {
        cartCtrl.delete(productoId)
        refreshTotalCart()
    }

    const deleteAllItems = () => {
        cartCtrl.deleteAll()
        refreshTotalCart()
    }

    const refreshTotalCart = () => {
        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())
    }

    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems,
        changeQuantityItem
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}