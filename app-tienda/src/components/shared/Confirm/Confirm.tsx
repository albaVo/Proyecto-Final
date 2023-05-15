//mui
import { Dialog } from '@mui/material'


export const Confirm = (props: any) => {

    const { ...rest } = props

    return (
        <Dialog {...rest}/>
    )
}
