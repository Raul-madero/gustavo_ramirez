'use client'

import StoreProvider from "@/app/StoreProvider"
import ListaClientes from "@/app/components/ListaClientes"

const Clientes = () => {
    
    return (
        <StoreProvider>
            <ListaClientes />
        </StoreProvider>
    )
}

export default Clientes