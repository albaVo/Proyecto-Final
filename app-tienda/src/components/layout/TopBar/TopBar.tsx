//styles
import styles from "./TopBar.module.scss"
//next
import Link from "next/link"
import Image from "next/image";
//components
import { Account } from "../Account";
import { MenuTop } from "../Menu";
//hooks
import { useCategorias } from "@/hooks/useCategorias";


export const TopBar = (props: any) => {

    const { categorias, isLoading } = useCategorias('/categorias')
    // console.log("l=", isLoading, "c=", categorias);

    const { isOpenSearch } = props

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" width={140} height={60} alt="OlympusArcade"/>
                </Link>
            </div>
            
            <div className={styles.center}>
                <MenuTop isOpenSearch={isOpenSearch} categoria={categorias}/>
            </div>

            <div className={styles.right}>
                <Account/>
            </div>
        </div>
    )
}
