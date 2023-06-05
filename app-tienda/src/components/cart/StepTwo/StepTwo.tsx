//styles
import { Separator } from "@/components/shared"
import styles from "./StepTwo.module.scss"
import { Addresses } from "./Addresses"

export const StepTwo = (props: any) => {
    
    const { productos } = props
    
    return (
        <div className={styles.stepTwo}>
            <div className={styles.center}>
                <Addresses/>
                <Separator height={50}/>

                <p>PAYMENT</p>
            </div>

            <div className={styles.right}>
                <p>RESUMEN</p>
            </div>
        </div>
    )
}
