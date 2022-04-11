import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
      <AppRoutes />
      <GlobalStyles />
  </>,
  document.getElementById('root')
)
