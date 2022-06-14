import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { Component } from "react"
import Home from "./Screens/Home"
import About from "./Screens/About"
import Games from "./Screens/Games"
import Login from "./Screens/LoginScreen"
import Signup from "./Screens/Signup"

class App extends Component {
  constructor() {
    super()
    this.state = {
      userId: null,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(id) {
    this.setState({ userId: id })
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home userId={this.state.userId} />} />
          <Route path="/about" element={<About userId={this.state.userId} />} />
          <Route path="/games" element={<Games userId={this.state.userId} />} />
          <Route
            path="/login"
            element={
              <Login
                userId={this.state.userId}
                handleLogin={this.handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup userId={this.state.userId} />}
          />
        </Routes>
      </div>
    )
  }
}

export default App
