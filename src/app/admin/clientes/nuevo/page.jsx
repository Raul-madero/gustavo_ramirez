'use client'
import FormularioCliente from "@/app/components/FormularioCliente"

const { default: StoreProvider } = require("@/app/StoreProvider")
const { default: Footer } = require("@/app/components/Footer")
const { default: Header } = require("@/app/components/Header")

const Nuevo = () => {
    return (
        <StoreProvider>
            <Header/>
            <FormularioCliente />
            <Footer/>
        </StoreProvider>
    )
}

export default Nuevo