import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/main/templates/home'
import Play from '../components/main/templates/play'
import Parts from '../components/main/templates/parts'

export default () =>
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/play' component={ Play } />
    <Route path='/parts' component={ Parts } />
    <Redirect from='*' to='/' />
  </Switch>
