//components
import { Footer, HeaderCart } from "@/components/layout"
import { Separator } from "@/components/shared"
//mui
import { Container } from "@mui/material"

export const CartLayout = (props: any) => {
    
    const { children } = props
    
    return (
        <>
            <HeaderCart/>
            <Separator height={150}/>

            <Container>{children}</Container>
            <Separator height={70}/>
            
            <Footer/>
        </>
    )
}
