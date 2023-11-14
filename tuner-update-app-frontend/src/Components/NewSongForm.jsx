import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function NewSongForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    year: "",
    genre: "",
    is_favorite: false
  });

  // Add New Song
  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addSong)
    })
      .then(() => {
        navigate("/songs");
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setSong({ ...song, [id]: value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong();
    resetForm();
  };

  function resetForm() {
    setSong({
      name: "",
      artist: "",
      album: "",
      year: "",
      genre: "",
      is_favorite: false
    });
  }

  return (
    <div className="add-song">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name: </label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="...song title"
          required
        />
        <label htmlFor="artist">Artist: </label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="...artist name"
          required
        />
        <label htmlFor="album">Album Name: </label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="...album title"
        />
        <label htmlFor="year">Year Released: </label>
        <input
          id="year"
          value={song.year}
          type="number"
          onChange={handleTextChange}
          placeholder="...year"
        />
        <label htmlFor="genre">Genre: </label>
        <input
          id="genre"
          value={song.genre}
          type="test"
          onChange={handleTextChange}
          placeholder="...genre"
        />
        <label htmlFor="is_favorite">Favorite?: </label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <button type="submit">Add Song To Database</button>
      </form>
      <br />
      <Link to={`/songs`}>
        <button>Back to Songs Database!</button>
      </Link>
    </div>
  );
}

export default NewSongForm;
