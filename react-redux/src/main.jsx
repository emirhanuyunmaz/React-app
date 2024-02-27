import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider as ReduxStore } from 'react-redux'
import { store } from './store/reduxStore.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Contex -api benzer olarak provider yapısının kullanılması işlemi. */}
    <ReduxStore store={store}>
      <App />
    </ReduxStore>
  </React.StrictMode>,
)
