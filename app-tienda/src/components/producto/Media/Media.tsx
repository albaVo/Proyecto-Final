//styles
import styles from "./Media.module.scss"
//mui
import { Container } from "@mui/material"
//components
import { Separator } from "@/components/shared"
import { Video } from "./Video"
import { Gallery } from "./Gallery"


export const Media = (props: any) => {
    
    const { video, capturas } = props
    
    return (
        <Container>
            <h2>Visuales</h2>
            <Separator height={30}/>

            <Video video={video}/>
            <Separator height={30}/>

            <Gallery capturas={capturas}/>
        </Container>
    )
}
