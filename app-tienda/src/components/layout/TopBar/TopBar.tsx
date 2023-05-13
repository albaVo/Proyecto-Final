//styles
import styles from "./TopBar.module.scss"
//next
import Link from "next/link"
import Image from "next/image";
//components
import { Account } from "../Account";
import { Menu } from "../Menu";
import { useCategorias } from "@/hooks/useCategorias";


export const TopBar = (props: any) => {

    const { categorias, isLoading } = useCategorias('/categorias')
    // console.log("l=", isLoading, "c=", categorias);

    const { isOpenSearch } = props

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" width={150} height={60} alt="OlympusArcade"/>
                </Link>
            </div>
            
            <div className={styles.center}>
                <Menu isOpenSearch={isOpenSearch} categoria={categorias}/>
            </div>

            <div className={styles.right}>
                <Account/>
            </div>
        </div>
    )
}
