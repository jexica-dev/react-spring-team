import { Routes, Route, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Home from "./Screens/Home"
// import About from "./Screens/About";
import Game from "./Screens/Game"
import Games from "./Screens/Games"
import Login from "./Screens/LoginScreen"
import Signup from "./Screens/Signup"
import Account from "./Screens/Account"
import EditUsername from "./Screens/EditUsername"
import EditPassword from "./Screens/EditPassword"
import DeleteAccount from "./Screens/DeleteAccount"
import ListScreen from "./Screens/ListScreen"

export default function App() {
  let navigate = useNavigate()
  const [id, setId] = useState(null)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    setId(localStorage.getItem("userId"))
    setUsername(localStorage.getItem("username"))
  }, [])

  const handleLogin = (id, username) => {
    setId(id)
    setUsername(username)
  }

  const handleEditUsername = (username) => {
    setUsername(username)
    localStorage.setItem("username", username)
  }

  const handleLogout = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
    setId(null)
    setUsername(null)
    navigate("/")
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home id={id} username={username} />} />
        <Route
          path="/lists"
          element={<ListScreen id={id} username={username} />}
        />
        <Route path="/games" element={<Games id={id} username={username} />} />
        <Route
          path="/games/:id"
          element={<Game id={id} username={username} />}
        />
        <Route
          path="/login"
          element={
            <Login handleLogin={handleLogin} id={id} username={username} />
          }
        />
        <Route
          path="/signup"
          element={<Signup id={id} username={username} />}
        />
        <Route
          path="/account"
          element={
            <Account id={id} username={username} handleLogout={handleLogout} />
          }
        />
        <Route
          path="/account/edit-username"
          element={
            <EditUsername
              id={id}
              username={username}
              handleEditUsername={handleEditUsername}
            />
          }
        />
        <Route
          path="/account/edit-password"
          element={<EditPassword id={id} username={username} />}
        />
        <Route
          path="/account/delete-account"
          element={
            <DeleteAccount
              id={id}
              username={username}
              handleLogout={handleLogout}
            />
          }
        />
      </Routes>
    </div>
  )
}
