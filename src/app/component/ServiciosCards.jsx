'use client'

const { Card, CardBody, CardTitle, Container } = require("react-bootstrap")
import facturacion from "../../img/facturacion.jpg"
import auditoria from "../../img/auditoria.jpg"
import declaracion from "../../img/declaraciones.jpg"
import calculo from "../../img/calculo.png"
import Image from "next/image"
import { Col, Row } from "react-bootstrap"

const ServiciosCards = () => {
    return (
        <Container>
            <Row>
                <h1 className="text-primary text-center">Servicios</h1>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                    <Card className="d- flex flex-column align-items-center justify-content-center p-3 border-4 mb-2 border-warning shadow-lg" style={{width: "15rem"}} >
                        <Image width={100} height={100} alt="Auditoria" src={auditoria}/>
                        <CardBody>
                            <CardTitle className="text-center fs-3 fw-semibold text-success-emphasis mt-3">Auditorias</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Card className="d- flex flex-column align-items-center justify-content-center p-3 border-4 mb-2 border-warning shadow-lg" style={{width: "15rem"}} >
                    <Image width={100} height={100} alt="Auditoria" src={facturacion}/>
                        <CardBody>
                            <CardTitle className="text-center fs-3 fw-semibold text-success-emphasis mt-3">Facturacion</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Card className="d- flex flex-column align-items-center justify-content-center p-3 border-4 mb-2 border-warning shadow-lg" style={{width: "15rem"}} >
                    <Image width={100} height={100} alt="Declaraciones" src={declaracion}/>
                        <CardBody>
                            <CardTitle className="text-center fs-3 fw-semibold text-success-emphasis mt-3">Declaraciones</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Card className="d- flex flex-column align-items-center justify-content-center p-3 border-4 mb-2 border-warning shadow-lg" style={{width: "15rem"}} >
                    <Image width={100} height={100} alt="Auditoria" src={calculo}/>
                        <CardBody>
                            <CardTitle className="text-center fs-3 fw-semibold text-success-emphasis mt-3">Nóminas</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}

export default ServiciosCards