//styles
import styles from "./Address.module.scss"
//mui
import { Button, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"


export const Address = (props: any) => {

  const { direccionId, direccion } = props

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
          <IconButton>
            <Edit/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
        </div>
      </div>
    </>
  )
}
