import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// fonts
import "@fontsource/inter";
import "@fontsource/poppins/700.css";
import "@fontsource/space-grotesk";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
