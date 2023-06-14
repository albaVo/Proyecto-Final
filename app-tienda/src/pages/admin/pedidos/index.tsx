//styles
import styles from "./Pedidos.module.scss"
//context
import { AuthContext, LayoutProvider } from "@/context"
//layout
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
//mui
import { DataGrid } from "@mui/x-data-grid"
//hooks
import { usePedidos } from "@/hooks/usePedidos"
//mui
import { AddCircle, Delete, Edit, Search } from "@mui/icons-material"
import { Button, DialogActions, DialogTitle } from "@mui/material"
//react
import { useContext, useState } from "react"
//components
import { AdminModal } from "@/components/shared/AdminModal"
import { Confirm } from "@/components/shared"
import { Pedido, PedidoForm } from "@/components/admin/pedidos"


const columns = [
    { field: "id",  headerName: "Id", width: 70 },
    { field: "fecha_pedido",  headerName: "Fecha pedido", width: 190 },
    { field: "precio_total",  headerName: "Precio total", width: 150 },
    { field: "direccion",  headerName: "Direccion", width: 130 },
    { field: "usuario",  headerName: "Usuario", width: 120 },
    { field: "productos",  headerName: "Productos Id", width: 160 }
]


const PedidosAdminPage = () => {

    const { pedidos, isLoading } = usePedidos('/pedidos')
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const openCloseShow = () => setShow((prevState) => !prevState)
    const openCloseEdit = () => setShowEdit((prevState) => !prevState)
    const openCloseDelete = () => setShowDelete((prevState) => !prevState)

    const { deletePedido } = useContext(AuthContext)

    const handleDelete = async (id: string) => {
        const { hasError, message } = await deletePedido(id)
        console.log(id)

        if (hasError) {
            console.error(message)
            return
        }
    }

    //poner en dirección el titulo y en usuario el nombre
    const rows = pedidos.map((pedido) => ({
        id: pedido.id,
        fecha_pedido: pedido.fecha_pedido,
        precio_total: pedido.precio_total,
        direccion: pedido.direccion,
        usuario: pedido.usuario,
        productos: pedido.productos
    }))

    const actionColumns = [
        { field: "action", headerName: "", width: 210, renderCell:({row}) => {

            return (
                <div className={styles.cellAction}>
                    <div className={styles.linkall}>
                        <Search
                            sx={{color: "#1778C8", fontSize: 25, marginLeft: 3}}
                            onClick={openCloseShow}
                        />
                        <Edit
                            sx={{color: "#D7A34D", fontSize: 25, marginLeft: 3}}
                            onClick={openCloseEdit}
                        />
                        <Delete
                            sx={{color: "#C41111", fontSize: 25, marginLeft: 3}}
                            onClick={openCloseDelete}
                        />
                    </div>
                </div>
            )
        }}
    ]

    return (
        <LayoutProvider>
            <AdminLayout>
                <div className="card">
                    <div className="text-900 font-medium text-3xl">Pedidos</div>
                    <DataGrid
                        rows={rows}
                        columns={columns.concat(actionColumns)}
                        initialState={{
                            pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        className={styles.datatable}
                    /> 
                </div>


                {/* ver pedido */}
                <AdminModal show={show} onClose={openCloseShow} title="Visualizar pedido">
                   <Pedido pedido={pedidos}/>
                </AdminModal>


                {/* editar pedido */}
                <AdminModal show={showEdit} onClose={openCloseEdit} title="Editar pedido">
                   <PedidoForm onClose={openCloseEdit} id={pedidos.id}/>
                </AdminModal>


                {/* eliminar pedido */}
                <Confirm
                    open={showDelete}
                    className={styles.confirm}
                >
                    <DialogTitle className={styles.dialog}>{"¿Estás seguro de que quieres eliminar el pedido?"}</DialogTitle>
                    <DialogActions className={styles.dialog}>
                        <Button onClick={openCloseDelete}>Cancelar</Button>
                        <Button onClick={() => handleDelete(id)}>OK</Button>
                    </DialogActions>
                </Confirm> 
            </AdminLayout>
        </LayoutProvider>
    )
}

export default PedidosAdminPage