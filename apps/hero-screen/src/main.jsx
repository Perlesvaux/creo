import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root-hero-screen')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
