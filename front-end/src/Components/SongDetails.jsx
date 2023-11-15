import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Playlists from "./Playlists";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();

  console.log("Value of id:", id);
  console.log("playlists state:", setPlaylists)

  const toggleFavorite = async (id, isFavorite) => {
    try {
      const response = await fetch(`${API}/songs/${id}/favorite`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_favorite: !isFavorite }),
      });

      if (!response.ok) {
        console.error("Error toggling favorite status");
      } else {
        setSong({ ...song, is_favorite: !song.is_favorite });
      }
    } catch (err) {
      console.error("Error toggling favorite status:", err);
    }
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        fetch(`${API}/songs/${id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log("Received song data:", res);
            setSong(res);
          })
          .catch((error) => {
            console.error("Error while fetching song data:", error);
          });
      } catch (error) {
        console.error("Error fetching song data:", error);
      }
    };
    fetchSong();
  }, [id, API]);

  const deleteSong = async (id) => {
    try {
      const response = await fetch(`${API}/songs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.error("Error deleting transaction");
      } else {
        console.log("Transaction deletion completed:", response.status);
      }
    } catch (err) {
      console.error("Error while deleting transaction:", err);
    }
  };

  const handleDelete = async () => {
    await deleteSong(id);
    navigate("/songs");
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ background: "violet", color: "black", padding: "10px" }}
      >
        Songs
      </h1>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card className="border-5">
          <Card.Body className="text-center p-3">
            {song && (
              <>
                <p>Name: {song.name}</p>
                <p>Arist: {song.artist}</p>
                <p>Album: {song.album}</p>
                <p>Runtime: {song.time}</p>
                <p>
                  Favorite:{" "}
                  <span
                    onClick={() => toggleFavorite(song.id, song.is_favorite)}
                    style={{ cursor: "pointer" }}
                  >
                    {song.is_favorite ? "⭐" : "☆"}
                  </span>
                </p>
                <div>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate("/songs")}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    onClick={handleDelete}
                  >
                    Erase this song?
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/songs/${id}/edit`)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
      <Playlists id={id} playlists={playlists} setPlaylists={setPlaylists} />
    </>
  );
}

export default SongDetails;
