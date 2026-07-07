import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../shared/axios.js";



export const delDomainThunk = createAsyncThunk(
    "domains/delete",
    async (id) => {
        const response  = await api.delete(`/domains/${id}`, );
        return id
    }
)


export const addDomainThunk = createAsyncThunk(
    "domains/add",
        async (domain) => {
            const response  = await api.post(`/domains`, {
                domain: domain,
                status:"pending",
                days_left: null,
                expires_at: null,
                issuer: null
            });

            return response.data
        }
)


export const domainsThink = createAsyncThunk(
    "domains/domain",
    async(page) => {
            const responce = await api.get(`/domains?_page=${page}&_per_page=3`,)
        return responce.data
    }
)
export const domainsSlice = createSlice({
    name: "domains",
    initialState: {
        items: [], loading: false, error: null,
        pagination: {current_page: 1, last_page: 1, total: 1, }
    },
    reducers:{

    },

    extraReducers:(builder) => {
        builder
            .addCase(domainsThink.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(domainsThink.fulfilled, (state, action) => {
               state.loading = false
               state.items = action.payload.data;
               state.pagination.current_page = action.payload.current_page;
               state.pagination.total = action.payload.items;
               state.pagination.firstPage = action.payload.first;
            })
            .addCase(addDomainThunk.fulfilled, (state, action) => {
                const newDomain = {
                    ...action.payload,
                    domain: action.meta.arg
                }
                state.items.unshift(newDomain)
            })
            .addCase(delDomainThunk.fulfilled, (state, action) => {
                const id = action.payload
                state.items = state.items.filter(e => e.id !== id)
            })
            .addCase(domainsThink.rejected, (state, action) => {
            state.loading = false;
            state.error = "ERROR"
            })
    }
})

export default domainsSlice.reducer;