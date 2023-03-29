import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Importando para usar o react-router.
import { ContextProvider } from './contexts/ContextReducer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter >
          <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
