const { default: StoreProvider } = require("@/app/StoreProvider")
const { default: Footer } = require("@/app/component/Footer")
const { default: Header } = require("@/app/component/Header")

const Nuevo = () => {
    return (
        <StoreProvider>
            <Header/>
            <Footer/>
        </StoreProvider>
    )
}

export default Nuevo