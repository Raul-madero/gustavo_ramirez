import Image from "next/image"
import nosotrosImagen from "../../img/nosotros.jpg"
import Link from "next/link"
const LayoutNosotros = () => {
    return (
        <div className="container-lg  d-flex justify-content-center align-items-center flex-column my-3">
            <Image className="mw-100" src={nosotrosImagen} alt="imagen nosotros" />
            <div className="mt-4 w-50">
                <h1 className="text-center my-3">¿Quienes Somos?</h1>
                <p>Somos un equipo de contadores con la vision de convertirnos en una alternativa eficiente, con respuestas ágiles y prácticas a las necesidades de nuestros clientes, siempre basados en el conocimiento profundo y en la aplicación de las leyes físcales.</p>
                <p>No pretendemos inventar formas mágicas para el cálculo de impuestos, más bien, el constante estudio de la legislación físcal es nuestra fortaleza para poder trabajar de la mano de nuestros clíentes para ayudarles a tener certidumbre y tranquilidad en el cumplimiento de las obligaciones fiscales vigentes.</p>
                <p>Buscamos siempre la cercania con el cliente para dar respuestas no solo en el pago de impuestos, sino, en la operación general de sus actividades, en el entendido de que nos enfocaremos en las áreas contable, físcal y financiera para que ustedes solo se preocupen por la operación de la empresa.</p>
            </div>
            {/* <Link className="btn btn-outline-primary" href="/nosotros/equipo">Conoce a nuestro equipo</Link> */}
        </div>
    )
}

export default LayoutNosotros