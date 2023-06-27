import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.css'
import App from './App.jsx'
import ContextProvider from "./Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </React.Fragment>
)