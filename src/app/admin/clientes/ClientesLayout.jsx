import { Button, Container, Table } from "react-bootstrap"
import { useGet_clientesQuery } from "@/lib/services/clientes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faEdit, faFileText } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const ClientesLayout = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const { data, error, isLoading }  = useGet_clientesQuery(`clientes?search=${searchTerm}&page=${currentPage}`)
    let clientes = []
    error ? console.log(error) : isLoading ? null : data ? clientes = data.clientes : null
    const filteredClientes = clientes.filter(
        (cliente) =>
            cliente.razonsocial.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cliente.rfc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }
    const handleSearch = () => {
        console.log('buscando')
        setCurrentPage(1)
    }
    const renderPaginator = () => {
        const totalPages = data?.total_pages || 1
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
    return (
        <Container className="my-3">
            <h1 className="text-center">Clientes</h1>
            <Container className="d-grid gap-2">
                <Button variant="outline-success">Crear Nuevo Cliente</Button>
            </Container>
            <Container className="my-2 border border-gray rounded-2 d-flex justify-content-between align-items-center p-2 w-50">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-none bg-none w-100" type="text" placeholder="BUSCAR"/>
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
                    {isLoading ? (
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    ) : filteredClientes.map((cliente, id) => (
                            <tr key={id}>
                                <th scope="row" hidden>{cliente.id}</th>
                                <td>{cliente.razonsocial}</td>
                                <td>{cliente.rfc}</td>
                                <td>
                                    <Button variant="danger" className="ms-2">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                                    <Button variant="primary" className="ms-2">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                    <Button variant="info" className="ms-2">
                                        <FontAwesomeIcon icon={faFileText}/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Container className="my-3">
                {renderPaginator()}
            </Container>
        </Container>
    )
}

export default ClientesLayout