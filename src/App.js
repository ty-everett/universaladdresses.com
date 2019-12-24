import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, NotFound } from 'pages'
import { Navbar } from 'components'

const routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: NotFound,
    default: true
  }
]

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          {...route}
        />
      ))}
    </Switch>
  </Router>
)

export default App
