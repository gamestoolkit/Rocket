import React from 'react'
import ReactDOM from 'react-dom'
import './overrides.css'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
)
