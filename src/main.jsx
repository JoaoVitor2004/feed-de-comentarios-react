import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'
import Counter from './contexts/Counter/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter>
      <App />
    </Counter>
  </StrictMode>
)