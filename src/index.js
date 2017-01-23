import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configure-store'
import App from './App'
import {Provider} from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
