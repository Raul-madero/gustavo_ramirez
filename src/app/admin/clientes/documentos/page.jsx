'use client'

import FormularioDocumentos from "@/app/components/FormularioDocumentos"

const { default: StoreProvider } = require("@/app/StoreProvider")
const { default: Footer } = require("@/app/components/Footer")
const { default: Header } = require("@/app/components/Header")

const Documentos = () => {
    return (
        <StoreProvider>
            <Header />
            <FormularioDocumentos />
            <Footer />
        </StoreProvider>
    )
}

export default Documentos