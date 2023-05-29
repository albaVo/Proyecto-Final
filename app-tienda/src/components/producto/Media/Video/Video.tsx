//styles
import styles from "./Video.module.scss"


export const Video = (props: any) => {
  
  const { video } = props
  
  return (
    <ReactPlayer url={video} className={}/>
  )
}
