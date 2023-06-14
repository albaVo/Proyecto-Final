//styles
import styles from "./Usuario.module.scss"

export const Usuario = (props: any) => {
    
    const { usuario } = props

    return (
        <div className="card">
            <div className="p-fluid formgrid grid">
                VISUALIZAR DIRECCIONES
                {/* <div className="field col-12 md:col-6">
                    <h5 className={styles.texto}></h5>
                    <i className="pi pi-calendar text-2xl" />
                    <span className={styles.span}>hola</span>
                </div> */}
            </div>
        </div>
    )
}
