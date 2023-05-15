//styles
import styles from "./Address.module.scss"
//mui
import { IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
//react
import { useState } from "react"
//components
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import { AddressForm } from "../../AddressForm"
import { Confirm } from "@/components/shared"


export const Address = (props: any) => {

  const { direccionId, direccion } = props
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const openCloseEdit = () => setShowEdit((prevState) => !prevState)
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{direccion.titulo}: </p>
          <p className={styles.info}>
            {direccion.direccion}, {direccion.ciudad}, {direccion.codigo_postal}, {direccion.telefono}
          </p>
        </div>

        <div className={styles.actions}>
          <IconButton onClick={openCloseEdit}>
            <Edit/>
          </IconButton>
          <IconButton onClick={openCloseConfirm}>
            <Delete/>
          </IconButton>
        </div>
      </div>

      <Confirm/>

      <BasicModal 
        show={showEdit} 
        onClose={openCloseEdit} 
        title="Editar dirección"
      >
        <AddressForm onClose={openCloseEdit}/>
      </BasicModal>
    </>
  )
}
