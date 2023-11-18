import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.REACT_APP_API_URL;

function SongEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.isFavorite });
  };

  // Update a song. Redirect to show view
  const updateSong = () => {
    fetch(`${API}/songs/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(song)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        navigate(`/songs/${index}`)
      })
  };

  // On page load, fill in the form with the song data.
  useEffect(() => {
    fetch(`${API}/songs/${index}`)
      .then(res => res.json())
      .then(res => setSong(res))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className="Edit">
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
      <Link to={`/songs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
