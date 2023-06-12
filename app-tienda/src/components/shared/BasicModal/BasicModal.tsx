//styles
import styles from "./BasicModal.module.scss"
//mui
import { Box, Modal, Typography } from "@mui/material"


export default function BasicModal(props: any) {

  const { children, show, onClose, title } = props

  return (
    <Modal open={show} onClose={onClose}>
      <Box className={styles.modal}>
        <Typography className={styles.titulo}>{title}</Typography>

        <Typography className={styles.body}>{children}</Typography>
      </Box>
    </Modal>
  )
}
