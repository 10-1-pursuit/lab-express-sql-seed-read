import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./playlistStyles.css";

function PlaylistForm({ playlistDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams();

  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (playlistDetails) {
      setPlaylist(playlistDetails);
    }
  }, [playlistDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting playlist:", playlist);
    handleSubmit(playlist);
    if (playlistDetails) {
      toggleView();
    }
    console.log("Resetting playlist data after submission:", {
      name: "",
      description: "",
      song_id: id,
    });
    setPlaylist({
      name: "",
      description: "",
      song_id: id,
    });
  };

  return (
    <div className="EditForm">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={playlist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Playlist name"
          required
        />
        <label htmlFor="description">Title:</label>
        <input
          id="description"
          type="text"
          required
          value={playlist.description}
          onChange={handleTextChange}
          placeholder="Playlist description"
        />
        <br />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlaylistForm;
