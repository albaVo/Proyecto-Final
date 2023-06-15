import { LayoutProvider } from "@/context"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import { PersonOutlineOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import styles from "./Usuario.module.scss"

const UsuarioAdminPage = () => {

    const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
    
    // fecha random
    function getRandomDate(startDate: Date, endDate: Date): Date {
        const startMillis = startDate.getTime()
        const endMillis = endDate.getTime()
        const randomMillis = startMillis + Math.random() * (endMillis - startMillis)
        return new Date(randomMillis)
    }

    const startDate = new Date('2021-01-01')
    const endDate = new Date('2023-01-01')
    const randomDate = getRandomDate(startDate, endDate).toLocaleDateString()


    return (
        <LayoutProvider>
            <AdminLayout>
                <div className="card">
                    <div className={styles.info}>
                        <IconButton className={styles.user}>
                            <PersonOutlineOutlined/>
                        </IconButton>
                        <h3 className={styles.username}>{storedUser.nombre} {storedUser.apellidos}</h3>
                        <h4 className={styles.email}>{storedUser.email}</h4>
                        <p className={styles.createdAt}>
                            Miembro desde: {randomDate}
                        </p>
                    </div>
                </div>
            </AdminLayout>
        </LayoutProvider>
    )
}

export default UsuarioAdminPage