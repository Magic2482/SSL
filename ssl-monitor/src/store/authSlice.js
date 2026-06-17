import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useNavigate} from "react-router-dom";


const BASE_URL = import.meta.env.VITE_API_URL;

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {

        await fetch(`${BASE_URL}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(),
        })
        if (!email || !password) {
            throw rejectWithValue('Email и пароль обязательны');
        }
        return {
            token: 'mock-token-123',
            user: {
                id: 1,
                name: 'Admin',
                email: email
            }
        };
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null
    },

    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            localStorage.token = null;
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = true;
                const { user, token } = action.payload;

                localStorage.setItem('token', token);
                state.user = user;
                state.token = token;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Ошибка при входе';
            });
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;