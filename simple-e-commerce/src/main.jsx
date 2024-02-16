import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* react-router-dom kullanabilmek için gerekli olan yapı */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
