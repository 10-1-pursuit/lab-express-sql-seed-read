import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">
          <Link to="/" className="nav-link">
            Songs
          </Link>
        </h1>
        <div className="navbar-nav ms-auto">
          <Link to="/new" className="btn btn-primary nav-link">
            Add Song
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
