import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Dogs from "components/queries/Dogs"
import Notfound from "navigation/errors/NotFound"
import NavBar from "components/bar/NavBar"
import TodoMain from "components/todo/TodoMain"

const Prout = () => (
  <h1>
    Welcome! Try to click everywhere if you want, but it's not doing much at the
    moment
  </h1>
)

const Router = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Prout} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/todo" component={TodoMain} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
