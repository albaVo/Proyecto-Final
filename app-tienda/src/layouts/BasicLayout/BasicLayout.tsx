//styles
import classNames from "classnames"
import styles from "./BasicLayout.module.scss"
//mui
import { Container } from "@mui/material"


export const BasicLayout = (props: any) => {

    const { 
        children, 
        isOpenSearch = false, 
        isContainer = false,
        relative = false
    } = props

    return (
        <>
            <Container>
                <div className={classNames({ [styles.relative]: relative })}>
                    {isContainer ? <Container>{children}</Container> : children}
                </div>
            </Container>
        </>
    )
}
