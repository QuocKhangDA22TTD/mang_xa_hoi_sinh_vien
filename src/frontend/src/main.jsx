// main.jsx hoặc index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import PostPage from './pages/PostPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
