import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.REACT_APP_API_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    isFavorite: false,
  });

  // Add a song. Redirect to the index view.
  const addSong = () => {
    const songData = { 
      name: song.name, 
      is_favorite: song.isFavorite
    }
    try {
      fetch(`${API}/songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
      })
        .then(res => res.json())
        .then(() => navigate('/songs'))
    } catch (error) {
      return error
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />

        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.isFavorite}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/songs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongNewForm;
