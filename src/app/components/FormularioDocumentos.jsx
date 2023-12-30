const { Form, FormGroup, FormLabel, FormControl, Container, Accordion, AccordionItem, AccordionHeader, AccordionBody, Button } = require("react-bootstrap")

const FormularioDocumentos = () => {
    return (
        <Container>
            <Form className="mt-5">
                <h1>Agrega los archivos para: </h1>
                <Accordion>
                    <AccordionItem eventKey="0">
                        <AccordionHeader>Reportes Financieros</AccordionHeader>
                        <AccordionBody>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Balance:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Estado de Resultados:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Anexos:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <AccordionHeader>SAT</AccordionHeader>
                        <AccordionBody>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Opinion de Cumplimiento:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Constancia de situación físcal:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Declaraciones:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>Laboral</AccordionHeader>
                        <AccordionBody>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Nómina:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Pago de IMSS:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Pago 2% Sobre nómina:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Opinion IMSS:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormLabel className="fs-5 ps-2 fw-bold">Altas/Bajas IMSS:</FormLabel>
                                <FormControl type="file" />
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                <Container className="d-flex justify-content-around my-5">
                    <Button variant="outline-success">Enviar</Button>
                    <Button variant="outline-primary" href="/admin/clientes" >Volver</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default FormularioDocumentos