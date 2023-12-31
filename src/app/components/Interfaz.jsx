const { default: Image } = require("next/image")
const { Container, Card, CardBody, CardTitle } = require("react-bootstrap")
import financieros from "@/img/financieros.jpg"
import tax from "@/img/tax.jpg"
import work from "@/img/work.jpg"

const Interfaz = () => {
    return (
        <Container className="my-3">
            <h1 className="text-center">RFC</h1>
            <h3 className="text-center">Nombre del Cliente</h3>
            <Container className="d-flex justify-content-between mt-3">
                <Card style={{width: "350px"}}>
                    <Image style={{height: "250px"}} className="mw-100" src={financieros} alt="Estados financieros" />
                    <CardBody>
                        <CardTitle className="text-center">Estados Financieros</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{width: "350px"}}>
                    <Image style={{height: "250px"}} className="mw-100" src={tax} alt="Estados financieros" />
                    <CardBody>
                        <CardTitle className="text-center">SAT</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{width: "350px"}}>
                    <Image style={{height: "250px"}} className="mw-100" src={work} alt="Estados financieros" />
                    <CardBody>
                        <CardTitle className="text-center">Laboral</CardTitle>
                    </CardBody>
                </Card>
            </Container>
        </Container>
    )
}

export default Interfaz