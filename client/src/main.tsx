import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import { AuthProvider, OperationsProvider } from '@contexts'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OperationsProvider>
          <App />
        </OperationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
