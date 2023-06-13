//styles
import styles from "./Productos.module.scss"
//context
import { AuthContext, LayoutProvider } from "@/context"
//hooks
import { useProductos } from "@/hooks/useProductos"
//layout
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
//mui
import { DataGrid } from "@mui/x-data-grid"
import { AddCircle, Delete, Edit, Search } from "@mui/icons-material"
import { Button, DialogActions, DialogTitle } from "@mui/material"
//react
import { useContext, useState } from "react"
//componenets
import { AdminModal } from "@/components/shared/AdminModal"
import { ProductoForm } from "@/components/admin/productos"
import { Confirm } from "@/components/shared"


const columns = [
    { field: "id",  headerName: "Id", width: 50 },
    { field: "titulo",  headerName: "Titulo", width: 190 },
    { field: "genero",  headerName: "Genero", width: 150 },
    { field: "imagen",  headerName: "Imagen", width: 130 },
    { field: "precio",  headerName: "Precio", width: 90 },
    { field: "descuento",  headerName: "Descuento", width: 120 },
    { field: "stock",  headerName: "Stock", width: 100 },
]


const ProductosAdminPage = () => {
    
    const { productos, isLoading } = useProductos('/productos')
    const [showCreate, setShowCreate] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)


    const openCloseCreate = () => setShowCreate((prevState) => !prevState)
    const openCloseEdit = () => setShowEdit((prevState) => !prevState)
    const openCloseDelete = () => setShowDelete((prevState) => !prevState)

    const { deleteProducto } = useContext(AuthContext)

    const handleDelete = async (id: string) => {
        const { hasError, message } = await deleteProducto(id)
        console.log(id)

        if (hasError) {
            console.error(message)
            return
        }
    }

    const status = (productos) => {
        return <span className={`product-badge status-${productos.stock}`}>
            {productos.stock > 0 && <span>EN STOCK</span>} 
            {productos.stock == 0 && <span>SIN STOCK</span>}
        </span>;
    }

    const rows = productos.map((producto) => ({
        id: producto.id,
        titulo: producto.titulo,
        genero: producto.genero,
        imagen: producto.imagen,
        precio: producto.precio,
        descuento: producto.descuento,
        stock: status
    }))

    const actionColumns = [
        { field: "action", headerName: "", width: 180, renderCell:({row}) => {

            return (
                <div className={styles.cellAction}>
                    {/* <Link href={`/dashboard/productos/${id}`}>
                        <Search sx={{color: "#6D5FF3", fontSize: 25, marginLeft: 2}}/>
                    </Link> */}
                    <div className={styles.linkall}>
                        <AddCircle 
                            sx={{color: "#639969", fontSize: 25, marginLeft: 3}}
                            onClick={openCloseCreate}
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
                    <div className="text-900 font-medium text-3xl">Productos</div>
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

                
                {/* crear producto */}
                <AdminModal show={showCreate} onClose={openCloseCreate} title="Nuevo producto">
                    <ProductoForm onClose={openCloseCreate} id={productos.id}/>
                </AdminModal>

                {/* editar producto */}
                <AdminModal show={showEdit} onClose={openCloseEdit} title="Editar producto">
                    <ProductoForm onClose={openCloseEdit} id={productos.id} isEditMode={true}/>
                </AdminModal>


                {/* eliminar producto */}
                <Confirm
                    open={showDelete}
                    className={styles.confirm}
                >
                    <DialogTitle className={styles.dialog}>{"¿Estás seguro de que quieres eliminar el producto?"}</DialogTitle>
                    <DialogActions className={styles.dialog}>
                    <Button onClick={openCloseDelete}>Cancelar</Button>
                    <Button onClick={() => handleDelete(id)}>OK</Button>
                    </DialogActions>
                </Confirm> 
            </AdminLayout>
        </LayoutProvider>
    )
}

export default ProductosAdminPage

