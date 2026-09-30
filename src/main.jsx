/*
--- React Crash Course ---
This is a small Quiz game created to learn React
Video: https://www.youtube.com/watch?v=TMYSeKi_MnI
Website: https://coding2go.com/source-code
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
