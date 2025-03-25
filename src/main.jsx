import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoute from './routes/AppRoute.jsx'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>,
)
