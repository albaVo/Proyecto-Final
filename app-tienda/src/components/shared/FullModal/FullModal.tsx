//styles
import { Box, Modal, Typography } from "@mui/material"
import styles from "./FullModal.module.scss"
import { Close } from "@mui/icons-material"

export const FullModal = (props: any) => {
    
    const { children, show, onClose } = props
    
    return (
        <Modal open={show}>
            <Box className={styles.fullModal}>
                <Typography className={styles.children}>{children}</Typography>

                <Close className={styles.close} onClick={onClose}/>
            </Box>
        </Modal>
    )
}
