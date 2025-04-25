import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegisterForm from './pages/RegisterForm'
import LoginForm from './pages/LoginForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterForm />
    <LoginForm />
  </StrictMode>,
)
