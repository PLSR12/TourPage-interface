import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <AppRoutes />
    <ToastContainer autoClose={2500} theme='colored' />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
