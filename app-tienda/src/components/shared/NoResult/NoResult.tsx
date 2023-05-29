//styles
import styles from "./NoResult.module.scss"

export const NoResult = (props: any) => {
    
    const { text } = props
    
    return (
        <div className={styles.noResult}>
            <p>{text}</p>
        </div>
    )
}
