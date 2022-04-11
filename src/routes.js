import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, International, National } from './containers'

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/internacionais' component={International} />

        <Route exact path='/nacionais' component={National} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
