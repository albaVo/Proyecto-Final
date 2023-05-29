//styles
import styles from "./Media.module.scss"
//mui
import { Container } from "@mui/material"
//components
import { Separator } from "@/components/shared"
import { Video } from "./Video"


export const Media = (props: any) => {
    
    const { video, capturas } = props
    
    return (
        <Container>
            <h2>Visuales</h2>
            <Separator height={30}/>
            <Video video={video}/>
        </Container>
    )
}
