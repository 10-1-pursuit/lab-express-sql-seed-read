import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">
          <Link to="/songs" className="text-white text-decoration-none">
            Songs
          </Link>
        </h1>
        <button className="btn btn-primary">
          <Link to="/songs/new" className="text-white text-decoration-none">
            Add Song
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
