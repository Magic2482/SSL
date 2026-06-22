import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const BASE_URL = import.meta.env.VITE_API_URL



export const addDomainThunk = createAsyncThunk(
    "domains/add",
        async (domain) => {
           const response =  await fetch(`${BASE_URL}/domains`,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({domain, status:"pending", days_left: null, expires_at: null, issuer: null })
            })
            if(!response.ok){
                throw new Error("Could not add domain thunk");
            }
            return response.json()
        }
)


export const domainsThink = createAsyncThunk(
    "domains/domain",
    async(page) => {
                const responce = await fetch(`${BASE_URL}/domains?_page=${page}&_per_page=3`,{
                method: "GET",
                headers:{ 'Content-Type': 'application/json' },
            },
        )
        if(!responce.ok){
            return "ERROR: No responce found.";
        }

        return await responce.json()
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
            .addCase(domainsThink.rejected, (state, action) => {
            state.loading = false;
            state.error = "ERROR"
            })
    }


})

export default domainsSlice.reducer;