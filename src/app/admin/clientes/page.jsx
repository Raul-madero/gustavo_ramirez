'use client'

import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
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