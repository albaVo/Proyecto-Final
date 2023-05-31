import { createContext, useEffect, useState,  } from "react";

export const CartContext = createContext()

export function CartProvider(props: any) {
    const { children } = props
    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
      
    }, [])        

    const data = {
        cart,
        addCart: () => {},
        total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItem: () => {}
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}