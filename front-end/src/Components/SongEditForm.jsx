import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    isFavorite: false,
    time: "",
  });

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch(`${API}/songs/${id}`);
        if (response.ok) {
          const songData = await response.json();
          console.log("songData:", songData);
          setSong(songData);
          setLoading(false);
        } else {
          console.error("Error fetching song data");
        }
      } catch (err) {
        console.error("Error fetching song data:", err);
      }
    };

    fetchSongData();
  }, [id]);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.isFavorite });
  };

  const updateSong = async () => {
    try {
      if (isNaN(song.time)) {
        alert("Time must be a valid number.");
        return;
      }
      const response = await fetch(`${API}/songs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(song),
      });
      if (response.ok) {
        navigate(`/songs/${id}`);
      } else {
        console.error("Error updating song");
      }
    } catch (err) {
      console.error("Error updating song:", err);
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
              {loading ? (
                <p>Loading...</p>
              ) : (
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
              )}
              <br />
              <Link to={`/songs/${id}`}>
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
