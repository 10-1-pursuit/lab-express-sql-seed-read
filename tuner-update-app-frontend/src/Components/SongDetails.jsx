import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongDetails() {
  const [song, setSong] = useState({ name: "" });
  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        fetch(`${API}/songs/${index}`)
          .then((res) => res.json())
          .then((res) => {
            setSong(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchSong();
  }, [index]);

  const handleDelete = () => {
    fetch(`${API}/songs/${index}`, { method: "DELETE" }).then(() =>
      navigate(`/songs`)
    );
  };

  return (
    <div className="details">
      <div className="container">
        {song ? (
          <div>
            <>
              <h2>{song.name}</h2>
              <p>Artist: {song.artist}</p>
              <p>Album/EP: {song.album}</p>
              <p>Year: {song.year}</p>
              <p>Genre: {song.genre}</p>
              <p>Favorite: {song.is_favorite}</p>
              <div>
                <Link to={`/songs/${index}/edit`}>Edit Song Info</Link>
                <button onClick={handleDelete}>Delete Song</button>
              </div>
            </>
          </div>
        ) : (
          <div className="no-song-alert">
            <div>No Song Info Available!</div>
            <div>
              <Link to="/songs">Select one of the available songs.</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SongDetails;
