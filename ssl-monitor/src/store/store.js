import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice.js";
// import domainsSlice from "./domainsSlice.js";

    export default configureStore({
        reducer: {
            auth: authReducer,
        },
    });