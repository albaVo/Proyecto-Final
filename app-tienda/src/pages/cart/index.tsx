//layout
import { CartLayout } from "@/layouts"
//next
import { useRouter } from "next/router"


const CartPage = () => {

  const { query: { step = 1 } } = useRouter() 
  const currentStep = Number(step)
  
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