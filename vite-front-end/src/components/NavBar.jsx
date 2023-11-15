import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <h1>
        <Link to="/artists">Artists</Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
