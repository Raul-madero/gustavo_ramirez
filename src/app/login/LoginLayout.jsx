'use client'

const { default: Image } = require("next/image")
const { Form } = require("react-bootstrap")
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import logo from "../../img/logoNegro.svg"
import Link from "next/link"

const LoginLayout = () => {
    return (
        <Form className="w-25 mx-auto">
            <Image src={logo} alt="logo" />
            <FormGroup>
                <FormLabel>RFC</FormLabel>
                <FormControl type="text" placeholder="Nombre de usuario"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Contraseña</FormLabel>
                <FormControl type="password" placeholder="Tu contraseña"/>
            </FormGroup>
            <Button variant="success" type="submit" className="text-light my-4 mx-auto d-block">Ingresar</Button>
            <Link href={"/"} className="text-center">¿Olvidaste tu contraseña?</Link>
        </Form>
    )
}

export default LoginLayout