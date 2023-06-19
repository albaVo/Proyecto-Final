//styles
import styles from "./Pedido.module.scss"
//primereact
import { TabView, TabPanel } from 'primereact/tabview';


export const Pedido = (props: any) => {

    const { pedido } = props
    console.log('pedido', pedido)

    return (
        <div className="card">
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <h5 className={styles.texto}>Fecha pedido</h5>
                    <i className="pi pi-calendar text-2xl" />
                    <span className={styles.span}>{pedido.fecha_pedido}</span>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className={styles.texto}>Precio total</h5>
                    <i className="pi pi-money-bill text-2xl" />
                    <span className={styles.span}>{pedido.precio_total}</span>
                </div>
                <TabView className={styles.tab}>
                    <TabPanel header="Usuario">
                        {pedido.usuario?.map((usuario) => (
                            <>
                                <div>
                                    <span className={styles.span2}>Id:</span>
                                    <span className={styles.span3}>{usuario.id}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Nombre:</span>
                                    <span className={styles.span3}>{usuario.nombre}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Apellidos:</span>
                                    <span className={styles.span3}>{usuario.apellidos}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Email:</span>
                                    <span className={styles.span3}>{usuario.email}</span>
                                </div>
                            </>
                        ))}
                    </TabPanel>
                    <TabPanel header="Direccion">
                        {pedido.direccion?.map((direccion) => (
                            <>
                                <div>
                                    <span className={styles.span2}>Id:</span>
                                    <span className={styles.span3}>{direccion.id}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Titulo:</span>
                                    <span className={styles.span3}>{direccion.titulo}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Direccion:</span>
                                    <span className={styles.span3}>{direccion.direccion}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Ciudad:</span>
                                    <span className={styles.span3}>{direccion.ciudad}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Codigo postal:</span>
                                    <span className={styles.span3}>{direccion.codigo_postal}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Telefono:</span>
                                    <span className={styles.span3}>{direccion.telefono}</span>
                                </div>
                            </>
                        ))}
                    </TabPanel>
                    <TabPanel header="Productos">
                        {pedido.productos?.map((productos) => (
                            <>
                                <div>
                                    <span className={styles.span2}>Id:</span>
                                    <span className={styles.span3}>{productos.id}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Titulo:</span>
                                    <span className={styles.span3}>{productos.titulo}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Imagen:</span>
                                    <span className={styles.span3}>{productos.imagen}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Descripcion:</span>
                                    <span className={styles.span3}>{productos.descripcion}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Precio:</span>
                                    <span className={styles.span3}>{productos.precio}</span>
                                </div>
                                <div>
                                    <span className={styles.span2}>Stock:</span>
                                    <span className={styles.span3}>{productos.stock}</span>
                                </div>
                            </>
                        ))}
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}
