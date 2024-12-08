import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './authContextProvider/AuthContextProvider.jsx'
import AllRoutes from './routings/AllRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    
    <App/>
    
  </AuthContextProvider>,
)