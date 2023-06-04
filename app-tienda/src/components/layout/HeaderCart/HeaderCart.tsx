//styles
import styles from "./HeaderCart.module.scss"
//next
import Link from "next/link"
import Image from "next/image"
//react
import React from "react"
//mui
import { Lock } from "@mui/icons-material"
//lodash
import { map } from "lodash"
//semantic-ui
import { Icon } from "semantic-ui-react"
import { useRouter } from "next/router"
import classNames from "classnames"


export const HeaderCart = () => {

    const {query: {step = 1}} = useRouter()
    const currentStep = step
    
    const steps = [
        {number: 1, title: "Cesta"},
        {number: 2, title: "Pago"},
        {number: 3, title: "Confirmación"}
    ]

    return (
        <div className={styles.headerCart}>
            <div className={styles.left}>
                <Link href='/'>
                    <Image src="/images/logo.png" width={150} height={60} alt="OlympusArcade"/>
                </Link>
            </div>

            <div className={styles.center}>
                {map(steps, (step) => (
                    <div key={step.number} className={classNames({
                        [styles.active]: step.number === Number(currentStep),
                        [styles.success]: step.number < Number(currentStep)
                    })}>
                        <span className={styles.number}>
                            <Icon name="check"/>
                            {step.number}
                        </span>

                        <span>{step.title}</span>

                        <span/>
                        
                        <span className={styles.space}/>
                    </div>
                ))}
            </div>

            <div className={styles.right}>
                <Lock/>
                <div>
                    <span>Pago seguro</span>
                    <span>256-bit SSL Secure</span>
                </div>
            </div>
        </div>
    )
}
