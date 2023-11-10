import { Link } from "react-router-dom";

function Song({song}) {
    return (
        <div>
            <Link to={`/songs/${song.id}`}><h5>🎵 Title: {song.name} 🎵<br/>Artist: {song.artist}<br/>Runtime: {song.time}<br/>Favorite: {song.is_favorite ? <span>❤️</span> : <span>💔</span>}</h5></Link>
        </div>
    )
}

export default Song;