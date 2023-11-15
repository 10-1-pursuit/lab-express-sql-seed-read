import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function EditSongForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  // get current year to be used with the max value of the form input for "year".
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    year: "",
    genre: "",
    is_favorite: false
  });

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setSong({ ...song, [id]: value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const editSong = () => {
    console.log(`${API}/songs/${id}`);

    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setSong(resJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editSong();
  };

  return (
    <div className="edit">
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
          min="1950"
          step="1"
          max={getCurrentYear()}
          onChange={handleTextChange}
        />
        <label htmlFor="genre">Genre: </label>
        <input
          id="genre"
          value={song.genre}
          type="text"
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
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back to All Songs!</button>
      </Link>
    </div>
  );
}

export default EditSongForm;
