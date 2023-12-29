'use client'
import React from "react"
import { Button, Container } from "react-bootstrap"
import { Playfair_Display } from "next/font/google"
const playfair = Playfair_Display({
    weight: '700',
    subsets: ['latin']
})

const Jumbotron = () => {
    return (
        <main className="jumbotron container-xl position-relative p-0 d-flex justify-content-center align-items-center">
            <div className="position-absolute bg-dark opacity-25 w-100 h-100 m-0"></div>
            <Container className="d-flex flex-column align-items-center justify-content-center p-0 z-3">
                <h1 className="fs-1 w-50 text-center text-light my-5" style={playfair.style}>Servicios de Contabilidad General</h1>
                <Button className="my-3 text-dark p-2" href="/contacto" variant="secondary" size="lg">Hazte Cliente</Button>
                <Button className="my-3 text-dark fw-3 p-4" href="/login" variant="primary">Ya Eres Cliente</Button>
            </Container>
        </main>
    )
}
export default Jumbotron