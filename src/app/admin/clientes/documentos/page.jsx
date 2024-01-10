'use client'
import StoreProvider from "@/app/StoreProvider"
import FormularioDocumentos from "@/app/components/FormularioDocumentos"

const Documentos = () => {
    return (
    <StoreProvider>
            <FormularioDocumentos />
    </StoreProvider>
    )
}

export default Documentos