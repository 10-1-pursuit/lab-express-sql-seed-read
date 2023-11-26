import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "0:00",
    is_favorite: false,
    video_url: "",
    image_url: "",
  });

  const handleTextChange = (event) => {
    // setSong({ ...song, [event.target.id]: event.target.value });
    setSong({
      ...song,
      [event.target.id]:
        event.target.id === "time" ? event.target.value : event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  // Update a song. Redirect to show view
  const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate(`/songs/${id}`);
      });
  };

  // On page load, fill in the form with the song data.
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        setSong(r);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          placeholder="Name of Website"
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="artist name"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="album name"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <label htmlFor="time">Duration:</label>
        <input
          id="time"
          name="time"
          value={song.time}
          onChange={handleTextChange}
        />
        <label htmlFor="image">image:</label>
        <input
          id="image"
          value={song.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="image of album"
        />
        <label htmlFor="video">video:</label>
        <input
          id="video"
          value={song.video_url}
          type="text"
          onChange={handleTextChange}
          placeholder="video of album"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
