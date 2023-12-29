'use client'
import React from "react"
import Cards from "./Cards"
import { Col, Container, Row } from "react-bootstrap"
import precio from "../../img/precio.jpg"
import profesional from "../../img/profesional.jpg"
import contabilidad from "../../img/contabilidad.jpg"


const Descripciones = () => {
    return (
        <Container className="descripciones">
            <Row >
                <Col>
                    <Cards 
                        img={profesional}
                        title="Personal Profesional Actualizado"
                        cardClass="bg-info descripciones_cards mt-2 p-2"
                        titleClass="text-center"
                        imgClass="mt-3 mx-auto" description={undefined} descriptionClass={undefined}/>                    
                </Col>
                <Col>
                    <Cards 
                        img={contabilidad}
                        title="Asesoria Contable Personalizada"
                        cardClass="bg-warning descripciones_cards mt-2 p-2"
                        titleClass="text-center"
                        imgClass="mt-3 mx-auto" description={undefined} descriptionClass={undefined}/>   
                </Col>
                <Col>
                    <Cards 
                        img={precio}
                        title="Un Precio Justo"
                        cardClass="bg-success descripciones_cards mt-2 p-2"
                        titleClass="text-center"
                        imgClass="mt-3 mx-auto" description={undefined} descriptionClass={undefined}/>   
                </Col>
            </Row>
        </Container>
    )
}
export default Descripciones