import { useEffect, useState } from "react";
import Song from './Song.jsx'

const API = import.meta.env.VITE_API_URL;

export default function Songs() {
    const [songs, setSongs] = useState([]);

    const fetchSongs = async () => {
        try {
            fetch(`${API}/songs`)
                .then(res => res.json())
                .then(data => setSongs(data))
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {
        fetchSongs()
    }, [])

    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Favorite</th>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map(song => <Song key={song.id} song={song} />)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}