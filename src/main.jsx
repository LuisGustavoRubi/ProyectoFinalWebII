import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/main.css'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <main>
      <App />
    </main>
  
  </StrictMode>,
)
