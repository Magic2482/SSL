import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const BASE_URL = import.meta.env.VITE_API_URL

export const domainsThink = createAsyncThunk(
    "domains/domain",
    async() => {
            const responce = await fetch(`${BASE_URL}/domains`,{
                method: "GET",
                headers:{ 'Content-Type': 'application/json' },
            },
        )
        if(!responce.ok){
            return "ERROR: No responce found.";
        }

        return await responce.json();
    }
)

export const domainsSlice = createSlice({
    name: "domains",
    initialState: {
        items: [], loading: false, error: null
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
               state.items = action.payload;
            })
            .addCase(domainsThink.rejected, (state, action) => {
            state.loading = false;
            state.error = "ERROR"
            })
    }


})

export default domainsSlice.reducer;