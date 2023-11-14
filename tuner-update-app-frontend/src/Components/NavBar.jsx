import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">View Songs</Link>
      </h1>
      <button>
        <Link to="/songs/new">Add New Song</Link>
      </button>
    </nav>
  );
}
