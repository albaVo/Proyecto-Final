//styles
import styles from "./HeaderWallpaper.module.scss"

export const HeaderWallpaper = (props: any) => {
    
    const { image } = props
    
    return (
        <div className={styles.headerWallpaper}>
            <img src={image}/>
        </div>
    )
}
