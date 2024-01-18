const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const dbUrl = "http://127.0.0.1:5000"

const initialState = {
    data: [],
    status: 'loading',
    page: 1,
    totalPages: null,
    finalizado: false 
}

const clientesSlice = createSlice({
    name: 'clientes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getClientes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getClientes.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fullfilled'
            state.page = action.payload
        })
        .addCase(getClientes.rejected, (state) => {
            state.status = 'error'
        })
        .addCase(nuevoCliente.fulfilled, (state, action) => {
            state.data = action.payload
            state.finalizado = true
        })
        .addCase(deleteCliente.fulfilled, (state) => state.finalizado = true)
    }
})


export const { fetchClientes } = clientesSlice.actions
export default clientesSlice.reducer

export const searchCliente = createAsyncThunk('clientes/get', async (searchParam) => {
    const data = await fetch(`${dbUrl}/api/clientes?search=${searchParam}&page=1`)
    const res = await data.json()
    return res
})

export const getClientes = createAsyncThunk('clientes/get', async () => {
    const data = await fetch(`${dbUrl}/api/clientes`)
    const res = await data.json()
    return res
})

export const pagination = createAsyncThunk('clientes/get', async (page) => {
    const data = await fetch(`${dbUrl}/api/clientes?page=${page}`)
    const res = await data.json()
    return res
})

export const deleteCliente = createAsyncThunk('clientes/<int:cliente_id>/delete', async (id) => {
    const data = await fetch(`${dbUrl}/api/clientes/${id}`, {
        method: 'DELETE'
    })
    const res = await data.json()
    return res
})

export const nuevoCliente = createAsyncThunk('clientes/post', async (datos) => {
    const data = await fetch(`${dbUrl}/api/clientes`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const res = await data.json()
    return res
})