import { Link } from "react-router-dom";
import '../styles/NavBar.css'


const NavBar = () => {
  return (
    <div className="navbar">
      <button className="element2">

      <Link to="/">Home</Link>
      </button>
      {/* &nbsp;&nbsp; */}
      <button className="element2">

      <Link to="/songs">Songs</Link>
      </button>
      {/* &nbsp;&nbsp; */}
      <button className="element2">
          <Link to="/songs/new">Add New Song</Link>
        </button>
    </div>
  );
};

export default NavBar;
