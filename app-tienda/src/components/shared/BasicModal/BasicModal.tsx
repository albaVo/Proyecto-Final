//styles
import { Box, Modal, Typography } from "@mui/material"
import styles from "./BasicModal.module.scss"


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
