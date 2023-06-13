//react
import { useEffect, useState } from "react"
//components
import { NoResult } from "@/components/shared"
import { map } from "lodash"
import { Order } from "./Order/Order"
import { useUsuarios } from "@/hooks/useUsuarios"


export const Orders = () => {
    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  
    const [orders, setOrders] = useState(null)    
    console.log(orders)

    const usuarioId = storedUser.id
    const { usuarios: usuario, isLoading } = useUsuarios(`/usuarios/${usuarioId}`)

    if (!orders) return <NoResult text="No tienes ningún producto comprado"/>

    return (
        <div>
            {map(orders, (order) => (
                <Order key={order.id} order={order}/>
            ))}
        </div>
    )
}
