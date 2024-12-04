import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
