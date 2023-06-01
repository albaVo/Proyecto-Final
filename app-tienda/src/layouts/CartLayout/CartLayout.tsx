//components
import { Footer } from "@/components/layout"
import { Separator } from "@/components/shared"
//mui
import { Container } from "@mui/material"

export const CartLayout = (props: any) => {
    
    const { children } = props
    
    return (
        <>
            <p>HeaderCart</p>
            <Separator height={150}/>
            <Container>{children}</Container>
            <Separator height={70}/>
            <Footer/>
        </>
    )
}
