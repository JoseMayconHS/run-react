import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/grid/main/templates/home'
import Sign from '../components/grid/main/templates/sign'
import Play from '../components/grid/main/templates/play'
import Parts from '../components/grid/main/templates/parts'

export default props =>
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/sign' component={ Sign } />
    <Route path='/play' component={ Play } />
    <Route path='/parts' component={ Parts } />
    <Redirect from='*' to='/' />
  </Switch>
