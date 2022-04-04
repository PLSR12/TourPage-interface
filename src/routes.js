import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Internationals from './containers/Internacionais'
import National from './containers/Nacionais'

function Router () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/internacionais' element={<Internationals />} />

      <Route path='/nacionais' element={<National/>} />

    </Routes>
  )
}

export default Router
