import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const New = () => {
  const API = process.env.REACT_APP_API_URL;
const navigate = useNavigate()
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "0:00",
    is_favorite: false,
  });

  const addSong = () => {
    const songData = {
      name: song.name,
      artist: song.artist,
      album: song.album,
      time: song.time,
      is_favorite: song.is_favorite,
    };

    try {
      console.log(`${API}/songs`);
      fetch(`${API}/songs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songData),
      })
        .then((res) => res.json())
        .then(() => navigate("/songs"));
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="new-form">
      <form onSubmit={handleSubmit}><br/><br/><br/>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />

        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist Name"
          required
        />

        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Album Name"
          required
        />

        <label htmlFor="time">Duration:</label>
        <input
          id="time"
          value={song.time}
          type="time"
          onChange={handleTextChange}
          placeholder="Duration"
          required
        />

<label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <button type="submit">Add Song</button>

      </form>{" "}

      <Link to={`/song`}>
        <button>Nah!</button>
      </Link>

    </div>
  );
};

export default New;
