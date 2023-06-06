//layout
import { CartLayout } from "@/layouts"
//next
import { useRouter } from "next/router"
//hooks
import { useCart } from "@/hooks/useCart"
import { useProductos } from "@/hooks/useProductos"
//react
import { useState, useEffect } from "react"
import { StepOne, StepTwo } from "@/components/cart"


const CartPage = () => {

  const { query: { step = 1 } } = useRouter() 
  const currentStep = Number(step)
  const [products, setProducts] = useState(null)
  const { cart } = useCart()  

  const getProductoById = async (id: string) => {
    try {
      const url = `http://localhost:3000/api/productos/${id}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data = []
        for await (const item of cart){
          const productoId = item.id
          const producto = await getProductoById(productoId)
          data.push({...producto, quantity: item.quantity})
        }
        // console.log(data)
        setProducts(data)
      } 
      catch (error) {
        console.error(error)
      }
    })()
  }, [cart])

 
  
  return (
    <>
      <CartLayout>
        {currentStep === 1 && <StepOne productos={products}/>}
        {currentStep === 2 && <StepTwo productos={products}/>}
        {currentStep === 3 && <p>Paso 3</p>}
      </CartLayout>
    </>
  )
}

export default CartPage