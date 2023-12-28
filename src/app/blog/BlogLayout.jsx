import Image from "next/image"
import React from "react"
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "react-bootstrap"
import importaciones from "../../img/importaciones.jpg"
import interes from "../../img/interes.jpg"
import construir from "../../img/construir.jpg"

const BlogLayout = () => {
    return (
        <Container className="my-3">
            <h1 className="text-center my-2">Temas de interes</h1>
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-2">
                        <Image src={importaciones} alt="importaciones" className="card-img-top"/>
                        <CardBody>
                            <CardTitle>Importaciones</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="w-50 mx-auto my-2">
                        <Image src={interes} alt="interes" className="card-img-top"/>
                        <CardBody>
                            <CardTitle>Intereses</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="w-50 mx-auto my-2">
                        <Image src={construir} alt="construir" className="card-img-top"/>
                        <CardBody>
                            <CardTitle>Construir</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogLayout