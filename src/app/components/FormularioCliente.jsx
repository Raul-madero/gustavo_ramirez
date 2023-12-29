const { Form, FormGroup, FormLabel, FormControl, Container, FormSelect, Button } = require("react-bootstrap")

const FormularioCliente = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center fw-bold text-dark">Cliente Nuevo</h1>
            <Form>
                <FormGroup className="mt-3">
                    <FormLabel>Razón Social:</FormLabel>
                    <FormControl type="text" name="razonsocial" placeholder="Razón Social" />
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>RFC:</FormLabel>
                    <FormControl type="text" name="rfc" placeholder="RFC" />
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Contacto:</FormLabel>
                    <FormControl type="text" name="contacto" placeholder="Nombre del Contacto" />
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Giro Comercial:</FormLabel>
                    <FormControl type="text" name="girocomercial" placeholder="Giro Comercial" />
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Encargado:</FormLabel>
                    <FormSelect aria-label="Colaborador select">
                        <option>Selecciona al encargado</option>
                        <option value="1">Alguien</option>
                    </FormSelect>
                </FormGroup>
                <Container className="d-flex justify-content-around mt-4">
                    <Button variant="outline-success" type="submit">Crear Cliente</Button>
                    <Button variant="outline-primary" href="/admin/clientes">Volver</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default FormularioCliente