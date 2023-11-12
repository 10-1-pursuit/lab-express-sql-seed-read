import { useEffect, useState } from "react";
import "../styles/Songs.css";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
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

  return (
    <div className="container">
      {songs.map((song) => (
        <div className="all-songs container" key={song.id}>
          <section>
            {song.name} by
            {song.artist} <Link to={song.album}> {song.album}</Link>
          </section>
          <h4> {song.time}</h4>
          <span style={{ color: song.is_favorite ? "red" : "black" }}>
            {song.is_favorite ? "Favorite" : ""}
          </span> 
        </div>
      ))}
    </div>
  );
};

export default Songs;
