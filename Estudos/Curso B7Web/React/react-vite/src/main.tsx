import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Importando para usar o react-router.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter> {/* Trocando o App para o browserRouter(que vai ser a caixa para as alterações de rotas) , e dentro dela sim coloca o App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
