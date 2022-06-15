import { Routes, Route } from "react-router-dom"
import React, { Component } from "react"
import Home from "./Screens/Home"
import About from "./Screens/About"
import Games from "./Screens/Games"
import Login from "./Screens/LoginScreen"
import Signup from "./Screens/Signup"
import Account from "./Screens/Account"

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      username: null,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(id, username) {
    this.setState({ id, username })
    setTimeout(() => {
      console.log(this.state)
    }, 1)
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home id={this.state.id} username={this.state.username} />}
          />
          <Route
            path="/about"
            element={
              <About id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/games"
            element={
              <Games id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                handleLogin={this.handleLogin}
                id={this.state.id}
                username={this.state.username}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/account"
            element={
              <Account id={this.state.id} username={this.state.username} />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
