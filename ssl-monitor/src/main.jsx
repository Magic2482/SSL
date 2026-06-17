import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from './store/store.js'
import {LoginPage} from "./pages/LoginPage.jsx";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header.jsx";
import React from "react";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Header/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)
