'use client'
const { default: StoreProvider } = require("@/app/StoreProvider")
const { default: Descarga } = require("@/app/components/Descarga")
const { default: Footer } = require("@/app/components/Footer")
const { default: Header } = require("@/app/components/Header")

const Archivos = () => {
    return (
        <StoreProvider>
            <Header/>
            <Descarga/>
            <Footer/>
        </StoreProvider>
    )
}

export default Archivos