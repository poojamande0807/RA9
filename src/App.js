import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";

import Login from "./Login";

import Users from "./Users";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
