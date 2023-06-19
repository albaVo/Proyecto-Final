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
import { Button, DialogActions, DialogTitle, Modal } from "@mui/material"
//react
import { useContext, useState } from "react"
//componenets
import { AdminModal } from "@/components/shared/AdminModal"
import { ProductoForm } from "@/components/admin/productos"
import { Confirm } from "@/components/shared"


const ProductosAdminPage = () => {
    
    const { productos, isLoading } = useProductos('/productos')

    const [showCreate, setShowCreate] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const [selectedStock, setSelectedStock] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStockCellClick = (stock) => {
        setSelectedStock(stock);
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    const openCloseCreate = () => setShowCreate((prevState) => !prevState)
    const openCloseEdit = () => setShowEdit((prevState) => !prevState)
    const openCloseDelete = () => setShowDelete((prevState) => !prevState)

    const { deleteProducto } = useContext(AuthContext)

    const handleDelete = async (id: number) => {
        const { hasError, message } = await deleteProducto(id)
        console.log(id)

        if (hasError) {
            console.error(message)
            return
        }
    }


    const columns = [
        { field: "id",  headerName: "Id", width: 60 },
        { field: "titulo",  headerName: "Titulo", width: 190 },
        { field: "genero",  headerName: "Genero", width: 150 },
        {
            field: 'imagen',
            headerName: 'Imagen',
            width: 130,
            renderCell: (params) => (
              <img src={params.value} alt="Imagen producto" style={{ width: '100%', height: 'auto' }} />
            ),
        },
        { 
            field: "precio",  
            headerName: "Precio", 
            width: 90,
            valueFormatter: (params) => `${params.value}€`
        },
        { 
            field: "descuento",  
            headerName: "Descuento",
            width: 120,
            valueFormatter: (params) => params.value ? `${params.value}%` : ''
        },
        { 
            field: "stock",  
            headerName: "Stock", 
            width: 100,
            renderCell: (params) => (
                <span 
                    className={`product-badge ${params.value > 0 ? styles.inStock : styles.outOfStock}`}    
                    onClick={() => handleStockCellClick(params.value)}
                >
                    {params.value > 0 ? 'EN STOCK' : 'SIN STOCK'}
                </span>
            )
        }
    ]


    const rows = productos.map((producto) => ({
        id: producto.id,
        titulo: producto.titulo,
        genero: producto.genero,
        imagen: producto.imagen,
        precio: producto.precio,
        descuento: producto.descuento,
        stock: producto.stock
    }))


    const actionColumns = [
        { field: "action", headerName: "", width: 180, renderCell:({row}) => {

            const { id } = row

            return (
                <div className={styles.cellAction}>
                    <div className={styles.linkall}>
                        <Edit
                            sx={{color: "#D7A34D", fontSize: 25, marginLeft: 3}}
                            onClick={openCloseEdit}
                        />
                        <Delete
                            sx={{color: "#C41111", fontSize: 25, marginLeft: 3}}
                            onClick={() => handleDelete(id)}
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
                    <div className="text-900 font-medium text-3xl">
                        Productos
                        
                        <AddCircle 
                            sx={{color: "#639969", fontSize: 25, marginLeft: 3, cursor: "pointer"}}
                            onClick={openCloseCreate}
                        />
                    </div>
                    <DataGrid
                        rows={rows}
                        columns={columns.concat(actionColumns)}
                        initialState={{
                            pagination: {
                              paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        className={styles.datatable}
                    />  
                    
                    <Modal open={isModalOpen} onClose={handleModalClose}>
                        <div className={styles.modalContent}>
                            <h2 className={styles.modalTitle}>Número de Stock</h2>
                            <p className={styles.modalStock}>{selectedStock}</p>
                        </div>
                    </Modal>           
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

