//styles
import styles from "./WhishlistIcon.module.scss"
//mui
import { Favorite } from "@mui/icons-material"
//classnames
import classNames from "classnames"


export const WhishlistIcon = (props: any) => {

    const { productoId, className } = props

    return (
        <Favorite 
            className={classNames(styles.wishlistIcon, {
                [className]: className
            })}
        />
    )
}
