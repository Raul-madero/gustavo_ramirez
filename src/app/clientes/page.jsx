'use client'

import Interfaz from "../components/Interfaz"

const { default: StoreProvider } = require("../StoreProvider")

const Clientes = () => {
    return (
        <StoreProvider>
            <Interfaz />
        </StoreProvider>
    )
}

export default Clientes