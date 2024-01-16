import clientesReducer from "./services/clientesSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        clientes: clientesReducer
    }
})

export default store