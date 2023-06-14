//styles
import styles from "./Pedido.module.scss"
//primereact
import { TabView, TabPanel } from 'primereact/tabview';


export const Pedido = (props: any) => {

    const { pedido } = props

    return (
        <div className="card">
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <h5 className={styles.texto}>Fecha pedido</h5>
                    <i className="pi pi-calendar text-2xl" />
                    <span className={styles.span}>hola</span>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className={styles.texto}>Precio total</h5>
                    <i className="pi pi-money-bill text-2xl" />
                    <span className={styles.span}>hola</span>
                </div>
                <TabView className={styles.tab}>
                    <TabPanel header="Usuario">
                        <div>
                            <span className={styles.span2}>Id:</span>
                            <span className={styles.span3}>1</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Nombre:</span>
                            <span className={styles.span3}>Alba</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Apellidos:</span>
                            <span className={styles.span3}>oller</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Email:</span>
                            <span className={styles.span3}>gmail</span>
                        </div>
                    </TabPanel>
                    <TabPanel header="Direccion">
                        <div>
                            <span className={styles.span2}>Id:</span>
                            <span className={styles.span3}>1</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Titulo:</span>
                            <span className={styles.span3}>Alba</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Direccion:</span>
                            <span className={styles.span3}>oller</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Ciudad:</span>
                            <span className={styles.span3}>544541</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Codigo postal:</span>
                            <span className={styles.span3}>gmail</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Telefono:</span>
                            <span className={styles.span3}>544541</span>
                        </div>
                    </TabPanel>
                    <TabPanel header="Productos">
                        <div>
                            <span className={styles.span2}>Id:</span>
                            <span className={styles.span3}>1</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Titulo:</span>
                            <span className={styles.span3}>Alba</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Imagen:</span>
                            <span className={styles.span3}>oller</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Descripcion:</span>
                            <span className={styles.span3}>544541</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Precio:</span>
                            <span className={styles.span3}>gmail</span>
                        </div>
                        <div>
                            <span className={styles.span2}>Stock:</span>
                            <span className={styles.span3}>544541</span>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}
