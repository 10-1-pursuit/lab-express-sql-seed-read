import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function NewSongForm() {
  const navigate = useNavigate();
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    isFavorite: false,
    time: "",
  });

  const handleTextChange = (event) => {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewSong({ ...newSong, isFavorite: !newSong.isFavorite });
  };

  const addNewSong = async () => {
    try {
      const response = await fetch(`${API}/songs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSong),
      });

      if (response.ok) {
        navigate("/songs");
      } else {
        console.error("Error adding the new song");
      }
    } catch (err) {
      console.error("Error adding the new song:", err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSong();
  };

  return (
    <div className="New">
      <h1
        className="text-center"
        style={{ background: "teal", color: "white", padding: "10px" }}
      >
        New Song
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="border-5">
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                value={newSong.name}
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
                value={newSong.artist}
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
                value={newSong.album}
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
                value={newSong.time}
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
                checked={newSong.isFavorite}
              />
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/songs`}>
              <button>Nevermind!</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewSongForm;
