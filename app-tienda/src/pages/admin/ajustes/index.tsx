import { UpdateForm } from "@/components/account"
import { LayoutProvider } from "@/context"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"


type UserData = {
    id: number,
    email: string,
    contraseña: string,
    nombre: string,
    apellidos: string,
}

const AjustesAdminPage = () => {
  return (
    <LayoutProvider>
        <AdminLayout>
            <h3 style={{color: "black"}}>Actualización datos usuario</h3>
            <UpdateForm/>
        </AdminLayout>
    </LayoutProvider>
  )
}

export default AjustesAdminPage