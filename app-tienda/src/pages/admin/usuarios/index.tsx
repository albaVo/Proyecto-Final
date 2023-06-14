//styles
import styles from "./Usuario.module.scss"
//hooks
import { useUsuarios } from "@/hooks/useUsuarios"
//react
import { useContext, useState } from "react"
//context
import { AuthContext, LayoutProvider } from "@/context"
//mui
import { AddCircle, Delete, Edit, Search } from "@mui/icons-material"
import { DataGrid } from "@mui/x-data-grid"
import { Button, DialogActions, DialogTitle } from "@mui/material"
//layouts
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
//components
import { AdminModal } from "@/components/shared/AdminModal"
import { Confirm } from "@/components/shared"
import { Usuario } from "@/components/admin"
import { UsuarioForm } from "@/components/admin/usuarios/UsuarioForm"


const columns = [
    { field: "id",  headerName: "Id", width: 70 },
    { field: "nombre",  headerName: "Nombre", width: 190 },
    { field: "apellidos",  headerName: "Apellidos", width: 150 },
    { field: "email",  headerName: "Email", width: 120 },
    { field: "isActive",  headerName: "isActive", width: 160 },
    { field: "roles",  headerName: "Rol", width: 160 },
    { field: "direcciones",  headerName: "Direcciones Id", width: 160 }
]

const UsuariosAdminPage = () => {
    const { usuarios, isLoading } = useUsuarios('/usuarios')
    const [show, setShow] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const openCloseShow = () => setShow((prevState) => !prevState)
    const openCloseCreate = () => setShowCreate((prevState) => !prevState)
    const openCloseEdit = () => setShowEdit((prevState) => !prevState)
    const openCloseDelete = () => setShowDelete((prevState) => !prevState)

    const { deleteUsuario } = useContext(AuthContext)

    const handleDelete = async (id: string) => {
        const { hasError, message } = await deleteUsuario(id)
        console.log(id)

        if (hasError) {
            console.error(message)
            return
        }
    }

    const rows = usuarios.map((usuario) => ({
        id: usuario.id,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        email: usuario.email,
        isActive: usuario.isActive,
        roles: usuario.roles,
        direcciones: usuario.direcciones
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
                    <div className="text-900 font-medium text-3xl">Usuarios</div>
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



                {/* ver usuario */}
                <AdminModal show={show} onClose={openCloseShow} title="Visualizar usuario">
                   <Usuario usuario={usuarios}/>
                </AdminModal>


                {/* crear usuario */}
                <AdminModal show={showCreate} onClose={openCloseCreate} title="Nuevo usuario">
                    <UsuarioForm onClose={openCloseCreate} id={usuarios.id}/>
                </AdminModal>


                {/* editar usuario */}
                <AdminModal show={showEdit} onClose={openCloseEdit} title="Editar usuario">
                   <UsuarioForm onClose={openCloseEdit} id={usuarios.id}/>
                </AdminModal>


                {/* eliminar usuario */}
                <Confirm
                    open={showDelete}
                    className={styles.confirm}
                >
                    <DialogTitle className={styles.dialog}>{"¿Estás seguro de que quieres eliminar el usuario?"}</DialogTitle>
                    <DialogActions className={styles.dialog}>
                        <Button onClick={openCloseDelete}>Cancelar</Button>
                        <Button onClick={() => handleDelete(id)}>OK</Button>
                    </DialogActions>
                </Confirm> 
            </AdminLayout>
        </LayoutProvider>
    )
}

export default UsuariosAdminPage