//styles
import { CheckCircleOutline } from "@mui/icons-material"
import styles from "./StepThree.module.scss"
import { Button } from "@mui/material"

export const StepThree = () => {
  return (
    <div className={styles.stepThree}>
      <CheckCircleOutline/>
      <h2>¡Compra realizada con éxito!</h2>

      <Button 
        href="/account"
        sx={{textTransform: 'none', width: '300px'}}
      >
        Ver pedido
      </Button>
    </div>
  )
}
