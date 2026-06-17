import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PageNotFoundPage from "./pages/NotFoundPage.jsx";


function App() {
  return (

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

  )
}

export default App
