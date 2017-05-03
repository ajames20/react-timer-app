import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Main from 'Main'

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//CSs
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)