//styles
import styles from "./TopBar.module.scss"
//next
import Link from "next/link"
import Image from "next/image";
//components
import { Account } from "../Account";
import { MenuSmall, MenuTop } from "../MenuTop";
//hooks
import { useCategorias } from "@/hooks/useCategorias";
import { IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";


export const TopBar = (props: any) => {

    const { categorias, isLoading } = useCategorias('/categorias')
    // console.log("l=", isLoading, "c=", categorias);
    const [navbar, setNavbar] = useState(false)
    const { isOpenSearch } = props

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" width={150} height={60} alt="OlympusArcade"/>
                </Link>
            </div>
            
            <div className={styles.center}>
                <MenuTop isOpenSearch={isOpenSearch} categoria={categorias}/>
            </div>

            <div className={styles.menuIcon}>
                <IconButton onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                        <Close/>
                    ) : (
                        <Menu/>
                    )}
                </IconButton>
            </div>
            
            <div className={`${navbar ? styles.menu : 'hidden'}`}>
                <MenuSmall isOpenSearch={isOpenSearch} categoria={categorias}/>
            </div>


            <div className={styles.right}>
                <Account/>
            </div>
        </div>
    )
}
