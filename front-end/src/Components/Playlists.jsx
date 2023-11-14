import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Playlist from "./Playlist";
import PlaylistForm from "./PlaylistForm";

const API = process.env.REACT_APP_API_URL;

function Playlists({ playlists, setPlaylists }) {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();

  const handleAdd = (createPlaylists) => {
    fetch(`${API}/songs/${id}/playlists`, {
      method: "POST",
      body: JSON.stringify(createPlaylists),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log("Added Playlist:", responseJSON);
        setPlaylists((prevPlaylists) => {
          if (Array.isArray(prevPlaylists)) {
            return [responseJSON, ...prevPlaylists];
          } else {
            return [responseJSON];
          }
        });
      })
      .catch((error) => console.error("Add Playlist Error:", error));
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API}/songs/${id}/playlists/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const deletedPlaylist = await response.json();

        if (deletedPlaylist && deletedPlaylist.id) {
          console.log("Playlist deleted successfully");

          setPlaylists((prevPlaylists) =>
            prevPlaylists.filter(
              (playlist) => playlist.id !== deletedPlaylist.id
            )
          );
        } else {
          console.log("Playlist not found:", id);
        }
      } else {
        console.log("Error deleting playlist:", response.status);
      }
    } catch (error) {
      console.error("Error deleting playlist:", error);
    } finally {
      navigate("/songs");
    }
  };

  const handleEdit = (updatePlaylist) => {
    fetch(`${API}/songs/${id}/playlists/${updatePlaylist.id}`, {
      method: "PUT",
      body: JSON.stringify(updatePlaylist),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log("Edited Playlist:", responseJSON);
        setPlaylists((prevPlaylists) => {
          if (Array.isArray(prevPlaylists)) {
            return prevPlaylists.map((playlist) =>
              playlist.id === updatePlaylist.id ? responseJSON : playlist
            );
          }
          return prevPlaylists;
        });
      })
      .catch((error) => console.error("Edit Playlist Error:", error));
  };

  useEffect(() => {
    console.log("Current playlists:", playlists);
    console.log("setPlaylists function:", setPlaylists);
    if (id) {
      fetch(`${API}/songs/${id}/playlists`)
        .then((response) => response.json())
        .then((response) => {
          console.log("Fetched Playlists:", response);

          if (Array.isArray(response)) {
            setPlaylists(response);
          } else if (response.playlist && Array.isArray(response.playlist)) {
            setPlaylists(response.playlist);
          } else {
            console.error("Invalid response format:", response);
            setPlaylists([]);
          }

          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetch Playlists Error:", error);
          setLoading(false);
        });
    }
  }, [id, API, setPlaylists]);

  console.log("id:", id);
  console.log("playlists:", playlists);

  return (
    <section className="Playlists">
      <h2>Playlists</h2>
      <PlaylistForm handleSubmit={handleAdd}>
        <h3>Add a New Playlist</h3>
      </PlaylistForm>
      {loading ? (
        <p>Loading playlists...</p>
      ) : Array.isArray(playlists) && playlists.length > 0 ? (
        playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            playlist={playlist}
            handleSubmit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>No playlists available</p>
      )}
    </section>
  );
}

export default Playlists;
