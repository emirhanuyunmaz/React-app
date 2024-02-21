import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from './theme'
import { GlobalCSS } from './components/styled/GlobalCSS.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalCSS/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
