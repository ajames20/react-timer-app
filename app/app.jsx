import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Main from 'Main'
import About from 'About';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load Foundation
$(document).foundation()

//CSs
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <Route path="about" component={About} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
)