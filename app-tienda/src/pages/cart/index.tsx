//layout
import { CartLayout } from "@/layouts"
//next
import { useRouter } from "next/router"
//hooks
import { useCart } from "@/hooks/useCart"
//react
import { useState, useEffect } from "react"


const CartPage = () => {

  const { query: { step = 1 } } = useRouter() 
  const currentStep = Number(step)
  const [products, setProducts] = useState(null)
  const { cart } = useCart()

  useEffect(() => {
    (async () => {
      try {
        const data = []
        for await (const item of cart){
          console.log(item)
        }
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])
  
  
  return (
    <>
      <CartLayout>
        {currentStep === 1 && <p>Paso 1</p>}
        {currentStep === 2 && <p>Paso 2</p>}
        {currentStep === 3 && <p>Paso 3</p>}
      </CartLayout>
    </>
  )
}

export default CartPage