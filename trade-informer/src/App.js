import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Login from "./components/login";
import Research from "./components/research";
import Logout from "./components/logout";

import UserContextProvider from "./contexts/usercontext";

function App() {

  return (
    <div>
      <UserContextProvider>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/about" className="navbar-brand">Trade Informer</a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/research"} className="nav-link">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/portfolio"} className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/logout"} className="nav-link">
              Logout
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path={"/about"} element={<About />} />
            <Route path={"/"} element={<About />} />
            <Route path={"/research"} element={<Research />} />
            <Route path={"/portfolio"} element={<Portfolio />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/logout"} element={<Logout />} />
          </Routes>
        </div>
        <div>
          <footer className="pt-4 my-md-5 pt-md-5 border-top fixed-bottom">
            <div className="card-body">
              <h5 className="card-title">Questions?</h5>
              <p className="card-text">Please Contact Us at <a href="email@email.com">Help@Trade_Informer.com</a> </p>
            </div>
          </footer>
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;