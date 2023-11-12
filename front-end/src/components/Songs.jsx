import { useEffect, useState } from "react";
import '../styles/Songs.css'


const API = process.env.REACT_APP_API_URL
const Songs = () => {
    
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! Status: ${r.status}`);
        }
        return r.json();
      })
      .then((r) => setSongs(r))
      .catch((err) => console.log("Error:", err));
  }, []);
songs.isFavorite = songs.is_favorite

  return (
    <div className="container" >
      <h2>songs container</h2>
      {songs.map((song, id) => (
        <div className="all-songs container" key={song.id}>
          <h3>
            {song.name} by {song.artist} {song.album} {song.time} {song.isFavorite}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Songs;
