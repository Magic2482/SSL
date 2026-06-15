import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice.js";
import domainsReducer from "../store/domainsSlice.js";

    export default configureStore({
        reducer: {
            auth: authReducer,
            domains: domainsReducer
        },
    });