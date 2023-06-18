import { AuthContext, LayoutProvider } from "@/context"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import { Logout, PersonOutlineOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import styles from "./Usuario.module.scss"
import { useContext, useEffect, useState } from "react"
import router from "next/router"

const UsuarioAdminPage = () => {

    // const storedUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}')
    const { logout } = useContext(AuthContext)
    
    const [storedUser, setStoredUser] = useState({});
    useEffect(() => {
        const userFromLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
        setStoredUser(userFromLocalStorage);
    }, []);
      

    const onLogout = () => {
        logout()
        router.push("/")
    }
    
    
    // fecha random
    function getRandomDate(startDate: Date, endDate: Date): Date {
        const startMillis = startDate.getTime()
        const endMillis = endDate.getTime()
        const randomMillis = startMillis + Math.random() * (endMillis - startMillis)
        return new Date(randomMillis)
    }

    const [randomDate, setRandomDate] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const startDate = new Date('2021-01-01');
            const endDate = new Date('2023-01-01');
            const generatedDate = getRandomDate(startDate, endDate).toLocaleDateString();
            setRandomDate(generatedDate);
        }
    }, []);


    return (
        <LayoutProvider>
            <AdminLayout>
                <div className="card">
                    <IconButton onClick={onLogout}>
                        <Logout sx={{fill: "purple"}}/>
                    </IconButton>

                    <div className={styles.info}>
                        <IconButton className={styles.user}>
                            <PersonOutlineOutlined/>
                        </IconButton>
                        <div className={styles.username}>{storedUser.nombre} {storedUser.apellidos}</div>
                        <div className={styles.email}>{storedUser.email}</div>
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