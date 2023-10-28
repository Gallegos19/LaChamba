import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import HomeClient from '../pages/HomeClient/HomeClient'
import Apartados from '../pages/Apartados/Apartados';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomeAdmin from '../pages/HomeAdmin/HomeAdmin';

function App() {
   return (
    
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomeClient />} />
       <Route path="/admin" element={<HomeAdmin />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/admin/apartados" element={<Apartados />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App
