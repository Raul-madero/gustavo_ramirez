'use client'

import Footer from "../components/Footer"
import Header from "../components/Header"
import Interfaz from "../components/Interfaz"

const { default: StoreProvider } = require("../StoreProvider")

const Clientes = () => {
    return (
        <StoreProvider>
            <Header />
            <Interfaz />
            <Footer />
        </StoreProvider>
    )
}

export default Clientes