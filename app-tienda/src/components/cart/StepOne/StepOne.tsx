//styles
import { Basket } from "./Basket"
import styles from "./StepOne.module.scss"

export const StepOne = (props: any) => {
    
    const { productos } = props
    
    return (
        <div className={styles.stepOne}>
            <div className={styles.center}>
                <Basket productos={productos}/>
            </div>

            <div className={styles.right}>
                <p>resume</p>
            </div>
        </div>
    )
}
