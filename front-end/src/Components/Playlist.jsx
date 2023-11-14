import { useState } from "react";
import PlaylistForm from "./PlaylistForm";

function Playlist({ playlist, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const toggleView = () => {
    setEditForm(!viewEditForm);
  };
  return (
    <div className="Playlist">
      {viewEditForm ? (
        <PlaylistForm
          playlistDetails={playlist}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {playlist.name} <span>{playlist.description}</span>
          </h4>
        </div>
      )}
      <div className="playlist-actions">
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this playlist"}
        </button>
        <button onClick={() => handleDelete(playlist.id)}>delete</button>
      </div>
    </div>
  );
}

export default Playlist;
