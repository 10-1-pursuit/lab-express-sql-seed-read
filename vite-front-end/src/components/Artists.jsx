import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Artists() {
    const [artists, setArtists] = useState([]);

    const fetchArtists = async () => {
        try {
            fetch(`${API}/artists`)
                .then(res => res.json())
                .then(data => setArtists(data))
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {
        fetchArtists()
    }, [])

    return (
        <div>
            <h2>Artists</h2>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>
                    <Link to={`/artists/${artist.id}/songs`}>
                        <strong>{artist.name}</strong>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}