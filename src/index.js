import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'

import { GlobalStyles } from './GlobalStyles'
import { store } from './store'
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles/>
    </Provider>
  </React.StrictMode>,
)
