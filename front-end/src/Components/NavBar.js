import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav>
        <div className="Navbar">
          <h1>
            <Link to="/songs">Tuner</Link>
          </h1>
          <button>
            <Link to="/new">New Song</Link>
          </button>
        </div>
      </nav>
    );
}

export default NavBar