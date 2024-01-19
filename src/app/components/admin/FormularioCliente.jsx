import { editarCliente, nuevoCliente, obtenerCliente } from "@/lib/services/clientesSlice"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const { Form, FormGroup, FormLabel, FormControl, Container, FormSelect, Button, Modal, ModalTitle, ModalHeader, ModalBody } = require("react-bootstrap")

const FormularioCliente = () => {
    const dispatch = useDispatch()
    const searchParams = useSearchParams()
    const { cliente } = useSelector(state => state.clientes)
    const id = parseInt(searchParams.get('id'))
    const [razonSocial, setRazonSocial] = useState(cliente.razonsocial || '')
    const [rfc, setRfc] = useState(cliente.rfc || '')
    const [contacto, setContacto] = useState(cliente.contacto || '')
    const [giroComercial, setGiroComercial] = useState(cliente.girocomercial ||'')
    const [encargado, setEncargado] = useState(1)
    const [show, setShow] = useState(false)
    const datos = {
        id: cliente.id || null,
        razonsocial: razonSocial,
        rfc: rfc,
        contacto: contacto,
        giroComercial: giroComercial,
        colaboradorid: encargado
    }
    useEffect(() => {
        if(id) {
            dispatch(obtenerCliente(id))
        }
    }, [])
    
    const handleClose = () => setShow(false)
    const handleOnClick = () => {
        datos.id ? dispatch(editarCliente(datos)) : dispatch(nuevoCliente(datos))
        
        setShow(true)
        setContacto('')
        setRfc('')
        setGiroComercial('')
        setRazonSocial('')
    }
    
    return (
        <Container className="mt-5">
            <h1 className="text-center fw-bold text-dark">Cliente Nuevo</h1>
            <Form>
                <FormGroup className="mt-3">
                    <FormLabel>Razón Social:</FormLabel>
                    <FormControl type="text" name="razonsocial" placeholder="Razón Social" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)}/>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>RFC:</FormLabel>
                    <FormControl type="text" name="rfc" placeholder="RFC" value={rfc} onChange={(e) => setRfc(e.target.value)}/>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Contacto:</FormLabel>
                    <FormControl type="text" name="contacto" placeholder="Nombre del Contacto" value={contacto} onChange={(e) => setContacto(e.target.value)}/>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Giro Comercial:</FormLabel>
                    <FormControl type="text" name="girocomercial" placeholder="Giro Comercial" value={giroComercial} onChange={e => setGiroComercial(e.target.value)}/>
                </FormGroup>
                <FormGroup className="mt-3">
                    <FormLabel>Encargado:</FormLabel>
                    <FormSelect aria-label="Colaborador select">
                        <option>Selecciona al encargado</option>
                        <option value="1">Alguien</option>
                    </FormSelect>
                </FormGroup>
                <Container className="d-flex justify-content-around mt-4">
                    <Button variant="outline-success" onClick={() => handleOnClick()}>Crear Cliente</Button>
                    <Button variant="outline-primary" href="/admin/clientes">Volver</Button>
                </Container>
            </Form>
            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                
            >
                <ModalHeader className="bg-info" closeButton>
                    <ModalTitle>{cliente.id ? 'Cliente actualizado correctamente' : 'Cliente creado correctamente'}</ModalTitle>
                </ModalHeader>
                <ModalBody className="bg-info">
                    <Button variant="outline-primary" onClick={handleClose}>Volver</Button>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default FormularioCliente