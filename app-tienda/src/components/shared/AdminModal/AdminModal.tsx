//styles
import styles from "./AdminModal.module.scss"
//mui
import { Box, Modal, Typography } from "@mui/material"


export const AdminModal = (props: any) => {

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
