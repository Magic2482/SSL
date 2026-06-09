import { configureStore } from '@reduxjs/toolkit';
import {authSlice} from "./authSlice.js";
import{domainsSlice} from "./domainsSlice.js";

export default configureStore({
    reducer: {
        auth: authSlice,
        domains: domainsSlice,
    },
});