import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, International, National, AdminInternational} from './containers'
import paths from './constants/paths' 

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/internacionais' component={International} />
        <Route exact path='/nacionais' component={National} />

        <Route exact path={paths.Packs} component={AdminInternational} />
        <Route exact path={paths.NewPacks} component={AdminInternational} />
        <Route exact path={paths.EditPacks} component={AdminInternational} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
