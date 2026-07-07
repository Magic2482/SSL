import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PageNotFoundPage from "./pages/NotFoundPage.jsx";
import {useSelector} from "react-redux";

function App() {
    const token = useSelector(state => state.auth.token)
  return (
      <BrowserRouter>
   <Routes>

     <Route path="/" element={<LoginPage/>} />
       <Route path="/login" element={<LoginPage key="login"/>} />
     <Route path="/dashboard"
     element={
         <ProtectedRoute>
             {token !== null ? <Dashboard /> : <LoginPage/>}
         </ProtectedRoute>
     } />

       <Route path="/*" element={<PageNotFoundPage/>} />
   </Routes>
      </BrowserRouter>

  )
}

export default App
