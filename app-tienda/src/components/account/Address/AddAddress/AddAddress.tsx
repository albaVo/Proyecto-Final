// styles
import styles from "./AddAddress.module.scss"
//react
import { useState } from "react"
// mui
import { Button } from "@mui/material"
import BasicModal from "@/components/shared/BasicModal/BasicModal"


export const AddAddress = () => {

    const [show, setShow] = useState(false)

    const onOpenClose = () => setShow((prevState) => !prevState)

    return (
        <>
            <Button className={styles.add} onClick={onOpenClose}>
                Crear
            </Button>

            <BasicModal>
                <h2>Contenido del modal</h2>
            </BasicModal>
        </>
    )
}
