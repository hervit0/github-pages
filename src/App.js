import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import MyButton from "components/buttons/Button"
import TopBar from "components/bar/TopBar"
import Router from "navigation/Router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bom dia!</p>
          <MyButton>Wow</MyButton>
        </header>
        <body>
          <Router />
        </body>
      </div>
    )
  }
}

export default App
