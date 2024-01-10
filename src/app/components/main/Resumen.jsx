import React from "react";
import { CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap";
import resumen from "../../../img/quienesSomos.jpg"

const Resumen = () => {
    console.log(resumen)
    return (
        <Container className="my-5">
            <div className="shadow bg-dark bg-gradient d-flex flex-column flex-lg-row g-3 p-4 justify-content-between align-items-center rounded-2">
                <CardImg className="w-50 me-4 rounded-3 shadow-lg" variant="bottom" src={resumen.src} alt="¿Quienes somos?"/>
                <CardBody className="w-75">
                    <CardTitle className="text-brand mb-3 fw-bold text-center mt-3 fs-1">¿Quiénes Sómos?</CardTitle>
                    <CardText className="text-light m-0 mt-1 p-4 fs-4">Somos un equipo de contadores con la vision de convertirnos en una alternativa eficiente y con respuestas agiles y practicas de acuerdo a las necesidades de nuestros clientes. Tenemos una gran vocación de servicio y el compromiso de satisfacer tus necesidades, siempre respetando los valores de nuestra profesion.</CardText>
                </CardBody>
            </div>
        </Container>
    )
}
export default Resumen