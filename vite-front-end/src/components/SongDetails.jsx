import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

export default function SongDetails() {
    const [song, setSong] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();

    const fetchSong = async () => {
        try {
            fetch(`${API}/songs/${id}`)
                .then(res => res.json())
                .then(data => setSong(data))
        } catch (err) {
            return err;
        }
    };

    useEffect(() => { fetchSong() }, [id]);

    const handleDelete = () => {
        try {
            fetch(`${API}/songs/${id}`, { method: "DELETE" })
                .then(() => navigate("/songs"))
        } catch (err) {
            return err;
        }
    }

    return (
        <div>
            {song.oneSong ? (
                <>
                    <h3>
                        Song Name: {song.oneSong.name}<br />
                        Artist: {song.oneSong.artist}<br />
                        Album: {song.oneSong.album}<br />
                        Time: {song.oneSong.time}<br />
                        Favorite: {song.oneSong.is_favorite ? <span>⭐️</span> : <span>❌</span>}
                    </h3>
                    <div>
                        {" "}
                        <Link to={`/songs`}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div>
                        {" "}
                        <Link to={`/songs/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <div>
                        {" "}
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    )
}