const { Container, Row, CardTitle, CardBody, FormGroup, FormLabel, FormSelect, Col, Card, Form, Button } = require("react-bootstrap")


const Descarga = () => {
    return (
        <Container className="mt-4">
            <Row>
                <h1 className="text-center">Reportes Financieros</h1>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Card className="p-3 bg-primary-subtle">
                        <CardTitle className="text-center fw-bold">Balance</CardTitle>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <FormLabel>
                                        Selecciona el mes que deseas descargar
                                    </FormLabel>
                                    <FormSelect>
                                        <option>Seleccione el mes</option>
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                    </FormSelect>
                                </FormGroup>
                                <Button className="my-5 d-block mx-auto" variant="success" type="submit">Descargar</Button> 
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3 bg-primary-subtle">
                        <CardTitle className="text-center fw-bold">Estado de Resultados</CardTitle>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <FormLabel>
                                        Selecciona el mes que deseas descargar
                                    </FormLabel>
                                    <FormSelect>
                                        <option>Seleccione el mes</option>
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                    </FormSelect>
                                </FormGroup>
                                <Button className="my-5 d-block mx-auto" variant="success" type="submit">Descargar</Button> 
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3 bg-primary-subtle">
                        <CardTitle className="text-center fw-bold">Anexos</CardTitle>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <FormLabel>
                                        Selecciona el mes que deseas descargar
                                    </FormLabel>
                                    <FormSelect>
                                        <option>Seleccione el mes</option>
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                    </FormSelect>
                                </FormGroup>
                                <Button className="my-5 d-block mx-auto" variant="success" type="submit">Descargar</Button> 
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Descarga