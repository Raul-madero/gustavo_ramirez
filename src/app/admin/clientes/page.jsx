'use client'

import Footer from "@/app/component/Footer"
import Header from "@/app/component/Header"
import ClientesLayout from "./ClientesLayout"
import StoreProvider from "@/app/StoreProvider"

const Clientes = () => {
    
    return (
        <StoreProvider>
            <Header />
            <ClientesLayout />
            <Footer />
        </StoreProvider>
    )
}

export default Clientes