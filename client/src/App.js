import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { baseURL, API_KEY, config } from "./Services/apiConfigGames";

import Home from "./Screens/Home";
// import About from "./Screens/About";
import Game from "./Screens/Game";
import Games from "./Screens/Games";
import Login from "./Screens/LoginScreen";
import Signup from "./Screens/Signup";
import Account from "./Screens/Account";
import ListScreen from "./Screens/ListScreen";
import axios from "axios";

export default function App(props) {
  let [id, setId] = useState(null);
  let [username, setUsername] = useState(null);

  const [games, setGames] = useState([]);
  // let handle
  function handleLogin(id_, username_) {
    setId(id_);
    setUsername(username_);
  }

  useEffect(() => {
    setId(localStorage.getItem("userId"));
    setId(localStorage.getItem("username"));

    //GET request
    async function fetchData() {
      const res = await axios.get(baseURL + API_KEY + "&page_size=24", config);
      setGames(res.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home id={id} username={username} />} />
        <Route
          path="/lists"
          element={<ListScreen id={id} username={username} />}
        />
        <Route
          path="/games"
          element={<Games id={id} games={games} username={username} />}
        />
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
          element={<Account id={id} username={username} />}
        />
      </Routes>
    </div>
  );
}
