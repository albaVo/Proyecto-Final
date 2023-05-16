//styles
import styles from "./BannerRandomGame.module.scss"
//next
import Image from "next/image";
//hooks
import { useProductos } from "@/hooks/useProductos";


export const BannerRandomGame = () => {
  
  const { productos, isLoading, isError } = useProductos('/productos')

  const randomProduct = productos[Math.floor(Math.random() * productos.length)]
  
  console.log(randomProduct);
  

  return (
    <div className={styles.container}>
      
      {randomProduct? (
        <>
          <Image src={randomProduct.fondo} width={100} height={100} alt={"Fondo producto"} className={styles.fondo}/>
        </>
      ) : (
        <div>No se encontró ningún producto</div>
      )}
      
    </div>
  )
}
