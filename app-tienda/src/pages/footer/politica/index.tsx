//layouts
import { BasicLayout } from "@/layouts"
//styles
import styles from "./Politica.module.scss"


const PoliticaPrivacidadPage = () => {
  return (
    <BasicLayout isContainer relative>
        <div className={styles.container}>
            <h2>Política de privacidad</h2>
            <div className={styles.contenido}>
                <h5>¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE TUS DATOS?</h5>
                <p>odos los datos facilitados por los Usuarios, sean mediante la navegación por el Sitio Web, el cumplimiento de formularios o la firma del contrato de Socio, serán incorporados a nuestros ficheros y tratados a través de medios automatizados o no automatizados, siguiendo las normas establecidas por el Reglamento General Europeo de Protección de Datos (RGPD), así como la legislación española y las instrucciones de la Agencia Española de Protección de datos.</p>
            
                <h5>¿CON QUÉ FINALIDAD TRATAMOS TUS DATOS?</h5>
                <p>En OLYMPUSARCADE tratamos los datos necesarios para gestionar y optimizar nuestros servicios y relaciones comerciales de cara a nuestros socios y clientes. Además, también usamos esta información para enviar publicidad de interés a los usuarios, relacionada con nuestros productos, novedades, ofertas y promociones.</p>
            
                <h5>¿CUÁNTO TIEMPO ALMACENAMOS TUS DATOS?</h5>
                <p>Los datos de carácter personal proporcionados por nuestros socios y clientes, serán conservados únicamente durante el tiempo necesario para la realización de las finalidades para la que fueron recogidos, siempre que se mantenga la relación comercial o contractual.</p>
                <p>Todos nuestros clientes podrán solicitar la supresión de sus datos de nuestros ficheros, conservándose los datos únicamente para atender posibles responsabilidades legales y por el plazo mínimo legalmente establecido.</p>
                <p>En el caso de los datos facilitados para la inscripción a las ofertas de empleo publicadas, serán conservados durante el plazo de un año desde la fecha de la última actualización. Transcurrido dicho periodo sin que hayan sido actualizados, los datos serán suprimidos, salvo indicación contraria del usuario.</p>
            </div>
        </div>
    </BasicLayout>
  )
}

export default PoliticaPrivacidadPage