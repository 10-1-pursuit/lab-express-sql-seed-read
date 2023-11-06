import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({ name: "" });
  let navigate = useNavigate();
  let { index } = useParams();

useEffect(() => {
  const fetchSong = async () => {
    try {
      fetch(`${API}/songs/${index}`)
      .then(res => res.json())
      .then(res => {
        setSong(res)
      })
    } catch (error) {
      return error
    }
  }
  fetchSong()
}, [index]) 

  const deleteSong = async (index) => {
    try {
      const response = await fetch(`${API}/songs/${index}`, {
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
    await deleteSong(index);
    navigate("/songs");
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ background: "#333", color: "white", padding: "10px" }}
      >
        Full Details
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
                <p>Favorite: {song.is_favorite}</p>
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
                    onClick={() => navigate(`/songs/${index}/edit`)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SongDetails;
