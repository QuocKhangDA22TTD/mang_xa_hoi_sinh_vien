import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import RegisterForm from './pages/RegisterForm'
import LoginForm from './pages/LoginForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/RegisterForm" />} />
        <Route path='/RegisterForm' element={<RegisterForm />} />
        <Route path='/LoginForm' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)