import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap'

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_Favorite: false,
    time: ""
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.is_Favorite });
  };

  const updateSong = async() => {
  try {
    const response = await fetch(`${API}/songs/${index}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    });
    if (response.ok) {
        navigate(`/songs/${index}`);
    } else {
        console.error('Error updating song');
    }
} catch (err) {
    console.error('Error updating song:', err);
}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ background: "teal", color: "white", padding: "10px" }}
      >
        Edit
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="Edit">
          <Card className="border-5">
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  value={song.name}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Name of Song"
                  required
                  style={{ marginBottom: "10px" }}
                />
<br />
                <label htmlFor="artist">Artist:</label>
                <input
                  id="artist"
                  value={song.artist}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Artist"
                  required
                  style={{ marginBottom: "10px" }}
                />
<br />
                <label htmlFor="album">Album:</label>
                <input
                  id="album"
                  value={song.album}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Album"
                  required
                  style={{ marginBottom: "10px" }}
                />
<br />
                <label htmlFor="time">Time:</label>
                <input
                  id="time"
                  value={song.time}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Time"
                  style={{ marginBottom: "10px" }}
                />
<br />
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
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SongEditForm;
