import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const clientesApi = createApi({
    reducerPath: 'clientesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5000/api/'}),
    endpoints: (builder) => ({
        get_clientes: builder.query({
            query: (tabla) => `${tabla}`,
        }),
        delete_cliente: builder.mutation({
            mutation: (cliente_id) => ({
                url: `clientes/${cliente_id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useGet_clientesQuery, useDelete_clienteMutation } = clientesApi