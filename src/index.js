import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
