//layouts
import { BasicLayout } from "@/layouts"
//styles
import styles from "./Terminos.module.scss"


const TerminosCondicionesPage = () => {
  return (
    <BasicLayout isContainer relative>
      <div className={styles.container}>
        <h2>Términos y condiciones</h2>
        <div className={styles.contenido}>
          <h5>OBJETO</h5>
          <p>Las presentes Condiciones regulan la relación jurídica derivada de los procesos de contratación formalizados por los Clientes a través del Sitio Web y sus distintas aplicaciones móviles de OLYMPUSARCADE, por lo que cualquier referencia al Sitio Web en las presentes condiciones generales de ventas se entenderá aplicable a las distintas aplicaciones móviles (APPs).</p>
          <p>Los Productos son ofrecidos a la venta exclusivamente para usuarios directos que, en virtud del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias (el “TRLGDCU”), tengan la consideración de consumidores (los “Clientes”). En consecuencia, algunas categorías de posibles compradores no podrán adquirir los Productos, tales como aquellos cuyo propósito sea el de revender los Productos a terceros, por ejemplo minoristas/comerciantes, mayoristas, revendedores, profesionales, etc.</p>
          
          <h5>DURACIÓN DE LAS CONDICIONES DE COMPRA</h5>
          <p>El periodo de vigencia de la oferta y el precio de los Productos se corresponderá con el tiempo durante el cual permanezcan publicados en el Sitio Web de modo que OLYMPUSARCADE se reserva el derecho a modificar estas condiciones de venta en el futuro. En tal caso, las condiciones de venta modificadas serán válidas y exigibles sólo con respecto a los pedidos que el Cliente remita con posterioridad a que dichas condiciones revisadas sean publicadas en el Sitio Web. Por consiguiente, OLYMPUSARCADE invita al Cliente a revisar la versión más reciente de las condiciones de venta antes de efectuar un pedido así como a imprimirse una copia de las mismas o a almacenarla electrónicamente.</p>
        
          <h5>ACEPTACIÓN DE LAS CONDICIONES GENERALES DE VENTA</h5>
          <p>El Cliente, con el envío de su pedido, acepta incondicionalmente y se compromete a respetar estas condiciones de venta en sus relaciones con OLYMPUSARCADE, manifestando, asimismo, tener la condición de “consumidor” en el sentido del TRLGDCU. El Cliente reconoce que OLYMPUSARCADE no está vinculada por condiciones de venta distintas de las aquí establecidas, salvo que se pacte lo contrario con carácter previo y por escrito.</p>
        </div>
      </div>
    </BasicLayout>
  )
}

export default TerminosCondicionesPage