import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Login from "./components/login";
import Research from "./components/research";


function App() {
  //here we use react hooks to make the user state.
  const [user, setUser] = React.useState(null);

  // async functions for login and log-out
  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return ( 
    <div>
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
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

    <div className="container mt-3">
      <Routes>
        <Route path={"/about"} element={<About/>} />
        <Route path={"/"} element={<About/>} />
        <Route path={"/research"} element={<Research/>}/>
        <Route path={"/portfolio"} element={<Portfolio/>}/>
        <Route path="/login" element={<Login/>}/>
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
  </div>
  );
}

export default App;
