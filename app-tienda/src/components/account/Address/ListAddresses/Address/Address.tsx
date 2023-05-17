//styles
import styles from "./Address.module.scss"
//mui
import { Button, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
//react
import { useContext, useState } from "react"
//components
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import { AddressForm } from "../../AddressForm"
import { Confirm } from "@/components/shared"
//context
import { AuthContext } from "@/context/auth"
//next
import router from "next/router"


export const Address = (props: any) => {
  const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
  console.log(storedUser)

  // const { usuario } = props
  const { deleteDireccion } = useContext(AuthContext)
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const openCloseEdit = () => setShowEdit((prevState) => !prevState)
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  const handleDelete = async (id: number) => {
    const { hasError, message } = await deleteDireccion(id)

    if (hasError) {
      console.error(message);
      return
    }

    // router.replace('/account')
  }

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{storedUser}: </p>
          {/* <p className={styles.info}>
            {usuario.direccion.direccion}, {usuario.direccion.ciudad}, {usuario.direccion.codigo_postal}, {usuario.direccion.telefono}
          </p> */}
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

      <Confirm
        open={showConfirm}
        className={styles.confirm}
      >
        <DialogTitle className={styles.dialog}>{"¿Estás seguro de que quieres eliminar la dirección?"}</DialogTitle>
        <DialogActions className={styles.dialog}>
          <Button onClick={openCloseConfirm}>Cancelar</Button>
          <Button onClick={() => handleDelete}>OK</Button>
        </DialogActions>
      </Confirm>

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
