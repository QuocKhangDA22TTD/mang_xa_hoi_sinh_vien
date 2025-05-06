// main.jsx hoặc index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirect từ root về trang đăng nhập */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Đăng nhập */}
        <Route path="/login" element={<LoginForm />} />
        
        {/* Đăng ký */}
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
