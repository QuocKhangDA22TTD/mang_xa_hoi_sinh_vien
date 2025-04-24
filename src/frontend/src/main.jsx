import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './pages/LoginForm' 
import Button from './components/Button'
import TextBox from './components/TextBox'
import Label from './components/Label'
import Frame from './components/Frame'
import Logo from './components/Logo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button children={"ĐĂNG KÝ"}/>
    <TextBox />
    <Label children={"ĐĂNG KÝ"}/>
    <Frame />
    <Logo src={"../../public/Logo.png"}/>
  </StrictMode>,
)
