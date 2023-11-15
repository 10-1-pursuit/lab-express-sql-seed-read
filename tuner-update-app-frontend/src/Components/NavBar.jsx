import { Link } from "react-router-dom";
import navBarLogo from "../assets/redlogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="d-flex bd-highlight mb-3" id="header">
      <div className="mr-auto p-2 bd-highlight">
        <img src={navBarLogo} alt="hmdb logo" height="60" />
      </div>
      <div className="d-flex align-items-center" id="allSongs">
        <Link className="mx-2" to="/songs">
          View All Tracks
        </Link>
      </div>
      <div className="d-flex align-items-center" id="newSong">
        <Link className="mx-2" to="/songs/new">
          Add New Track
        </Link>
      </div>
    </div>
  );
}
