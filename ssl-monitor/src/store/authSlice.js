import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../shared/axios.js'




export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        const response = await api.post(`/user`, {
            email,
            password
        })
        return {
            token: "mock-token-123",
            user:{
                "id": 1,
                "name": "Admin",
                "email": "admin@example.com"
            }
        };
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: localStorage.token,
        loading: false,
        error: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            localStorage.setItem("token",token)
            localStorage.setItem("user",user.email)
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                const { user, token } = action.payload;
                localStorage.setItem('token', token);
                state.token = token;
                state.loading = false;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Ошибка при входе';
            });
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;