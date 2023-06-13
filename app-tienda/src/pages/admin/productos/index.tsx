import { AuthContext, LayoutProvider } from "@/context"
import { useProductos } from "@/hooks/useProductos"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import { DataGrid } from "@mui/x-data-grid"
import { Column } from "primereact/column"
import { DataTable, DataTableExpandedRows } from "primereact/datatable"
import styles from "./Productos.module.scss"
import Link from "next/link"
import { AddCircle, Delete, Edit, Search } from "@mui/icons-material"
import { useContext, useState } from "react"
import { useRouter } from "next/router"
import BasicModal from "@/components/shared/BasicModal/BasicModal"
import { AdminModal } from "@/components/shared/AdminModal"
import { ProductoForm } from "@/components/admin/productos"
import { Confirm } from "@/components/shared"
import { Button, DialogActions, DialogTitle } from "@mui/material"


const columns = [
    { field: "id",  headerName: "Id", width: 50 },
    { field: "titulo",  headerName: "Titulo", width: 190 },
    { field: "genero",  headerName: "Genero", width: 150 },
    { field: "imagen",  headerName: "Imagen", width: 130 },
    { field: "precio",  headerName: "Precio", width: 90 },
    { field: "descuento",  headerName: "Descuento", width: 120 },
    { field: "stock",  headerName: "Stock", width: 100 },
]

type ProductData = {id: string}


const ProductosAdminPage = () => {
    
    const { productos, isLoading } = useProductos('/productos')
    const router = useRouter()
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

    const status = (productosData) => {
        return <span className={`product-badge status-${productosData.stock}`}>
            {productosData.stock > 0 && <span>EN STOCK</span>} 
            {productosData.stock == 0 && <span>SIN STOCK</span>}
        </span>;
    }

    const rows = productosData.map((producto) => ({
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
            const {id} = row

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


const productosData = [
    {
        "id": 1,
        "titulo": "The Last of Us Part I",
        "genero": "Acción y adventura",
        "descripcion": "En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país. ",
        "imagen": "https://gaming-cdn.com/images/products/13298/616x353/the-last-of-us-part-i-pc-juego-steam-cover.jpg?v=1680018236",
        "fondo": "https://gaming-cdn.com/img/products/13298/pcover/13298.jpg?v=1680018236",
        "capturas": [
            "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-1.jpg?v=1680018236",
            "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-2.jpg?v=1680018236",
            "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-3.jpg?v=1680018236",
            "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-4.jpg?v=1680018236",
            "https://gaming-cdn.com/images/products/13298/screenshot/the-last-of-us-part-i-pc-juego-steam-wallpaper-5.jpg?v=1680018236"
        ],
        "video": "https://www.youtube.com/watch?v=CxVyuE2Nn_w",
        "precio": 60,
        "descuento": 39,
        "stock": 15,
        "categoriaId": 2,
        "subcategoriaId": 12
    },
    {
        "id": 2,
        "titulo": "Hogwarts Legacy",
        "genero": "Acción y adventura",
        "descripcion": "Hogwarts Legacy es RPG de acción y aventura para un solo jugador basado en el universo de Harry Potter, en el que el jugador se pone en la piel de un recién llegado al castillo de Hogwarts, tan querido por los fans de los libros y la franquicia cinematográfica.",
        "imagen": "https://gaming-cdn.com/images/products/7072/616x353/hogwarts-legacy-pc-juego-steam-europe-cover.jpg?v=1676112832",
        "fondo": "https://gaming-cdn.com/img/products/7072/pcover/7072.jpg?v=1676112832",
        "capturas": [
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-1.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-2.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-3.jpg?v=1676112832",
            "https://gaming-cdn.com/images/products/7072/screenshot/hogwarts-legacy-pc-juego-steam-europe-wallpaper-5.jpg?v=1676112832"
        ],
        "video": "https://www.youtube.com/watch?v=S6GTl_vPRvU&t=2s",
        "precio": 60,
        "descuento": 31,
        "stock": 0,
        "categoriaId": 2,
        "subcategoriaId": 12
    },
    {
        
        "id": 3,
        "titulo": "Marvel's Spider-Man: Miles Morales",
        "genero": "Acción y adventura",
        "descripcion": "Marvel's Spider-Man: Miles Morales para PC es el juego de consola de 2020 remasterizado para PC. Es un juego de acción y aventura basado en la obra gráfica de una década que culminó en la película de animación de 2018, Spiderman into the Spiderverse.",
        "imagen": "https://gaming-cdn.com/images/products/12953/616x353/marvel-s-spider-man-miles-morales-pc-juego-steam-cover.jpg?v=1673341651",
        "fondo": "https://gaming-cdn.com/img/products/12953/pcover/12953.jpg?v=1673341651",
        "capturas": [
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-1.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-2.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-3.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-4.jpg?v=1673341651",
            "https://gaming-cdn.com/images/products/12953/screenshot/marvel-s-spider-man-miles-morales-pc-juego-steam-wallpaper-5.jpg?v=1673341651"
        ],
        "video": "https://www.youtube.com/watch?v=CMRBuagwRb4",
        "precio": 50,
        "descuento": 57,
        "stock": 10,
        "categoriaId": 2,
        "subcategoriaId": 12
    }
]