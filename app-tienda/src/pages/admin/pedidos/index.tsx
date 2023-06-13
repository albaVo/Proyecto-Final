//styles
import { LayoutProvider } from "@/context"
import styles from "./Pedidos.module.scss"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import { DataGrid } from "@mui/x-data-grid"
import { usePedidos } from "@/hooks/usePedidos"


const columns = [
    { field: "id",  headerName: "Id", width: 50 },
    { field: "fecha_pedido",  headerName: "Fecha pedido", width: 190 },
    { field: "precio_total",  headerName: "Precio total", width: 150 },
    { field: "direccionId",  headerName: "Direccion", width: 130 },
    { field: "usuarioId",  headerName: "Usuario", width: 90 },
    { field: "productosId",  headerName: "Productos", width: 120 }
]


const PedidosAdminPage = () => {

    const { pedidos, isLoading } = usePedidos('/pedidos')

    const rows = pedidos.map((pedido) => ({
        id: pedido.id,
        fecha_pedido: pedido.fecha_pedido,
        precio_total: pedido.precio_total,
        direccionId: pedido.direccionId,
        usuarioId: pedido.usuarioId,
        fecha_pedido: pedido.fecha_pedido
    }))

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
            </AdminLayout>
        </LayoutProvider>
    )
}

export default PedidosAdminPage


const pedidosData = [
    {
        "id": 1,
        "precio_total": 120,
        "direccionId": 4,
        "productosId": [195, 203, 202],
        "usuarioId": 4
    },
    {
        "id": 2,
        "precio_total": 250,
        "direccionId": 5,
        "productosId": [229, 253, 270, 203, 281],
        "usuarioId": 4
    },
    {
        "id": 3,
        "precio_total": 50,
        "direccionId": 6,
        "productosId": [221, 266],
        "usuarioId": 5
    }
]