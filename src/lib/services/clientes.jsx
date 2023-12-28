import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const clientesApi = createApi({
    reducerPath: 'clientesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5000/api/'}),
    endpoints: (builder) => ({
        get_clientes: builder.query({
            query: (tabla) => `${tabla}`,
        }),
    })
})

export const { useGet_clientesQuery, useGet_clienteQuery } = clientesApi