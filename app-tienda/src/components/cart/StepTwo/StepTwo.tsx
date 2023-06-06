//styles
import styles from "./StepTwo.module.scss"
//components
import { Separator } from "@/components/shared"
import { Addresses } from "./Addresses"
import { Payment } from "./Payment"
//react
import { useState } from "react"
//stripe
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
//utils
import { ENV } from "@/utils/constants"
import { Resume } from "./Resume"


const stripeInit = loadStripe(ENV.STRIPE_TOKEN)

export const StepTwo = (props: any) => {
    
    const { productos } = props
    const [addressSelected, setAddressSelected] = useState(null)
    
    return (
        <Elements stripe={stripeInit}>
            <div className={styles.stepTwo}>
                <div className={styles.center}>
                    <Addresses
                        addressSelected={addressSelected}
                        setAddressSelected={setAddressSelected}
                    />
                    <Separator height={50}/>

                    {addressSelected && (<Payment/>)}
                    
                </div>

                <div className={styles.right}>
                    <Resume productos={productos} addressSelected={addressSelected}/>
                </div>
            </div>
        </Elements>
    )
}
