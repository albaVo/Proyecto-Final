//react
import { useEffect, useState } from "react"
//components
import { NoResult } from "@/components/shared"
import { map } from "lodash"
import { Order } from "./Order/Order"
import { useUsuarios } from "@/hooks/useUsuarios"


export const Orders = () => {
    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')  
<<<<<<< HEAD
=======
    // const [orders, setOrders] = useState(null)    
    // console.log(orders)
>>>>>>> 3cd86c917d913db3da347de476aeabb7c9251378

    const usuarioId = storedUser.id
    const { usuarios: usuario, isLoading } = useUsuarios(`/auth/${usuarioId}`)
    // console.log(usuario)

    const pedidos = usuario.pedidos
    // console.log(pedidos)

    if (!pedidos) return <NoResult text="No tienes ningún producto comprado"/>

    return (
        <div>
            {map(pedidos, (pedido) => (
                <Order key={pedido.id} pedido={pedido}/>
            ))}
        </div>
    )
}
