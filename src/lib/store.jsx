import { configureStore } from "@reduxjs/toolkit"
import { clientesApi } from "./services/clientes"

export const makeStore = () => {
    return configureStore({
        reducer: {
            [clientesApi.reducerPath]: clientesApi.reducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(clientesApi.middleware)
    })
}