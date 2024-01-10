import Link from "next/link"
import { Row, Container, Col } from "react-bootstrap"
import logo from "../../../img/logo.svg"
import Image from "next/image"
import whatsapp from "../../../img/whatsapp.svg"

const Footer = () => {
    return (
        <Container className="container-fluid bg-brand bg-gradient mt-4 shadow-sm pt-5 ps-5" style={{minHeight: '10rem', maxHeight: '15rem'}}>
            <Row>
                <Col className="d-flex align-items-center justify-content-around">
                    <Link className="text-light fs-6" href={"/"} ><Image className="me-2" alt="Whatsapp" src={whatsapp}/></Link>
                </Col>
                <Col className="col-6 d-flex justify-content-center align-items-center">
                    <Link href="/">
                        <Image className="w-lg-100" width={200} src={logo} alt="Logo"/>
                    </Link>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Footer