//styles
import styles from "./Video.module.scss"
//reactPlayer
import ReactPlayer from "react-player"


export const Video = (props: any) => {
  
  const { video } = props
  
  return (
    <ReactPlayer 
      url={video} 
      className={styles.video} 
      width='100%' 
      height={634}
    />
  )
}
