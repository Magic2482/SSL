import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

 const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        try{
        const responce = await fetch('/login',{
        method: 'POST',
        header:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        });

    if(!responce.ok){
        const err = await responce.json.catch(() => ({}));
        throw rejectWithValue(err.message || 'Ошибка входа');
    }

   const data = await responce.json();

    if(data.token){
        localStorage.setItem('token', data.token);
    }
        }
    catch (error){throw error; }
    }
)

export const authSlice = createSlice({
    name: 'authSlice',
    initialState:{
        User: null,
        Token: null,
        Loading: false,
        Error:null,
    },
    reducers:{
        setCredentials({ user, token }){
            this.User = user
            this.Token = token
            this.Loading = false
            this.Error = null
        },

        logout(){
            this.User = null
            this.Token = null
            this.Loading = false
            this.Error = null
        }
    }

})
