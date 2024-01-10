'use client'
const { default: StoreProvider } = require("@/app/StoreProvider")
const { default: Descarga } = require("@/app/components/Descarga")

const Archivos = () => {
    return (
        <StoreProvider>
            <Descarga/>
        </StoreProvider>
    )
}

export default Archivos