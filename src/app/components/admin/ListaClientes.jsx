import { Button, Container, Table, Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faEdit, faFileText } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { deleteCliente, getClientes, pagination, searchCliente } from "@/lib/services/clientesSlice"

const ListaClientes = () => {
    const dispatch = useDispatch()
    const {data: clientes, status} = useSelector(state => state.clientes)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState({})
    const [eliminado, setEliminado] = useState(false)
    const handleConfirmDelete = (id) => {
        setShow(false)
        dispatch(deleteCliente(id))
        dispatch(getClientes())
        setEliminado(true)
    }
    console.log(process.env.BACKEND_URL)
    useEffect(() => {
        dispatch(getClientes())
    }, [])
    console.log(clientes, status)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
        dispatch(pagination(newPage))
    }
    const handleSearch = () => {
        setCurrentPage(1)
        dispatch(searchCliente(searchTerm))
    }
    const renderPaginator = () => {
        const totalPages = clientes?.total_pages || 1
        return (
            <nav>
                <ul className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
    const handleDelete = (cliente) => {
        setSelected(cliente)
        setShow(true)
    }
    const handleClose = () => setShow(false);
    return (
        <Container className="my-3">
            <h1 className="text-center">Clientes</h1>
            {eliminado ? <div className="w-50 mx-auto bg-danger text-light text-center fs-2 my-3">Cliente eliminado correctamente</div> : <></>}
            <Container className="d-grid gap-2">
                <Button href="/admin/clientes/nuevo" variant="outline-success">Crear Nuevo Cliente</Button>
            </Container>
            <Container className="my-2 border border-gray rounded-2 d-flex justify-content-between align-items-center p-2 w-50">
                <input value={searchTerm} onChange={(e) => {
                    setCurrentPage(1)
                    setSearchTerm(e.target.value)
                    handleSearch()
                    }} className="border border-none bg-none w-100" type="text" placeholder="BUSCAR"/>
                <Button onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </Container>
            <Table className="mt-4 table-striped table-light">
                <thead>
                    <tr>
                        <th className="p-3 bg-secondary" scope="col" hidden>id</th>
                        <th className="p-3 bg-secondary" scope="col">Razón Social</th>
                        <th className="p-3 bg-secondary" scope="col">RFC</th>
                        <th className="p-3 bg-secondary" scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {status === 'loading' ? (
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : 
                    clientes.clientes.map((cliente, id) => (
                            <tr key={id}>
                                <th scope="row" hidden>{cliente.id}</th>
                                <td>{cliente.razonsocial}</td>
                                <td>{cliente.rfc}</td>
                                <td>
                                    <Button onClick={() => handleDelete(cliente)} variant="danger" className="ms-2">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                                    <Button href={`/admin/clientes/nuevo?id=${cliente.id}`} variant="primary" className="ms-2">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                    <Button href={`/admin/clientes/documentos?id=${cliente.id}`} variant="info" className="ms-2">
                                        <FontAwesomeIcon icon={faFileText}/>
                                    </Button>
                                </td>
                            </tr>
                        ))} */}
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader className="bg-warning" closeButton>
                                <ModalTitle className="text-dark fw-bold">¿Eliminar a {selected.razonsocial}?</ModalTitle>
                            </ModalHeader>
                            <ModalBody className="bg-warning text-dark fw-bold">Esta acción no se puede deshacer</ModalBody>
                            <ModalFooter className="bg-warning">
                                <Button className="text-dark fw-bold" variant="primary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button className="text-secondary" variant="danger" onClick={() => handleConfirmDelete(selected.id)}>
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </Modal>
                        
                </tbody>
            </Table>
            <Container className="my-3">
                {renderPaginator()}
            </Container>
        </Container>
    )
}

export default ListaClientes