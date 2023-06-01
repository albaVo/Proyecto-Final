//styles
import styles from "./Account.module.scss"
//react
import { useContext } from "react"
//next
import { useRouter } from "next/router"
//context
import { AuthContext } from "@/context/auth"
//mui
import { Badge, Button } from "@mui/material"
import { ShoppingCart, Person, AccountCircle } from '@mui/icons-material';
//hooks
import { useCart } from "@/hooks/useCart"


export const Account = () => {
    
    const { user } = useContext(AuthContext)
    const { total } = useCart()
    const router = useRouter()

    const isTokenPresent = () => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            return token !== null && token !== undefined && token !== '';
        }
        return false;
    }

    const goToLogin = () => router.push("/auth/login")
    const goToAccount = () => router.push("/account")

    const goToCart = () => {
        if(!isTokenPresent()) goToLogin()
        else router.push("/cart")
    }

    return (
        <div className={styles.account}>
            <Button className={styles.cart}>
                {/* <ShoppingCart onClick={goToCart}/> */}
                {/* {total > 0 && <Avatar style={{width: 23, height: 23}}>{total}</Avatar>} */}
                {total > 0 && <Badge badgeContent={total} color="secondary"><ShoppingCart onClick={goToCart}/></Badge>}
            </Button>

            {/* <Button className={classNames({[styles.user]: isTokenPresent})}>
                <PersonOutlineOutlined onClick={isTokenPresent() ? goToAccount : goToLogin}/>
            </Button> */}
            <Button>
                {isTokenPresent() ? (
                    <AccountCircle onClick={goToAccount}/>
                ) : (
                    <Person onClick={goToLogin}/>
                )}
            </Button>
        </div>
    )
}
