import { Link } from "react-router-dom";

function Song({song}) {
    return (
        <div>
            <Link to={`/songs/${song.id}`}>{song.name}</Link>
        </div>
    )
}

export default Song;