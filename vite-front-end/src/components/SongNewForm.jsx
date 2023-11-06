import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function SongNewForm() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const addSong = () => {
        try {
            fetch(`${API}/songs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(song)
            })
                .then(res => res.json())
                .then(() => navigate("/songs"))
        } catch (err) {
            return err;
        }
    };

    const handleText = e => setSong({ ...song, [e.target.id]: e.target.value });
    const handleCheckbox = () => setSong({ ...song, is_favorite: !song.is_favorite });
    const handleSubmit = e => {
        e.preventDefault();
        addSong();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Song Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleText}
                    placeholder="Name of Song"
                    required
                />
                <br/>
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleText}
                    placeholder="Name of Artist"
                    required
                />
                <br/>
                <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleText}
                    placeholder="Name of Album"
                />
                <br/>
                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleText}
                    placeholder="Time"
                />
                <br/>
                <label htmlFor="is_favorite">Favorite:</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckbox}
                    checked={song.is_favorite}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/songs`}>
                <button>Back</button>
            </Link>
        </div>
    )
}