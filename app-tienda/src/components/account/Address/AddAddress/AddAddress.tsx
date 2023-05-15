// styles
import styles from "./AddAddress.module.scss"
//react
import { useState } from "react"
// mui
import { Button } from "@mui/material"
//components
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import { AddressForm } from "../AddressForm"


export const AddAddress = () => {

    const [show, setShow] = useState(false)

    const onOpenClose = () => setShow((prevState) => !prevState)

    return (
        <>
            <Button 
                className={styles.add} 
                onClick={onOpenClose}
                sx={{textTransform: 'none'}}
            >
                Crear
            </Button>

            <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
                <AddressForm onClose={onOpenClose}/>
            </BasicModal>
        </>
    )
}
