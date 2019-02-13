import React from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import Main from './Main'
import Problem1 from './Problem1/index'
import Home from './Home'

const Routes = () => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/problem1" component={Problem1} />
          <Route path="/home" component={Home} />
          <Route component={Home} />
        </Switch>
      </Main>
    </Router>
  )
}

export default Routes
