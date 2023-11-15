import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const ArtistsSongs = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState({});
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchArtistAndSongs = async () => {
            try {
                const response = await fetch(`${API}/artists/${id}/songs`);
                if (response.ok) {
                    const data = await response.json();
                    setArtist(data); 
                    setSongs(data.allSongs); 
                } else {
                    console.error("Error fetching artist and songs");
                }
            } catch (error) {
                console.error("Error fetching artist and songs:", error);
            }
        };

        fetchArtistAndSongs();
    }, [id]);

    return (
        <div>
            <h2>{artist.name}'s Songs</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.name} - {song.album} - {song.time}
                    </li>
                ))}
            </ul>
            <Link to={`/artists`}>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default ArtistsSongs;
