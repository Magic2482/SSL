import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PageNotFoundPage from "./pages/NotFoundPage.jsx";
import  Header from "./components/header.jsx";

function App() {
  return (
      <BrowserRouter>
   <Header/>
   <Routes>

     <Route path="/login" element={<LoginPage/>} />

     <Route path="/dashboard"
     element={
         <ProtectedRoute>
                <Dashboard />
         </ProtectedRoute>
     } />

       <Route path="/*" element={<PageNotFoundPage/>} />
   </Routes>
      </BrowserRouter>

  )
}

export default App
