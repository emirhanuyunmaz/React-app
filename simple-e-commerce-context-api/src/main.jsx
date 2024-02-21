import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { SignInContextProvider } from './context/SignInContext.jsx'
import { ActiveUserContextProvider } from './context/ActiveUserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Context ve Router bilgilerinin aktarılması için kullanılan yapı.
  <React.StrictMode>
    <BrowserRouter>
      <SignInContextProvider>
        <ActiveUserContextProvider>
          <App />
        </ActiveUserContextProvider>
      </SignInContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
