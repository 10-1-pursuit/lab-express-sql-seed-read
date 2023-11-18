import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({ name: "" });
  const [background, setBackground] = useState("");
  let navigate = useNavigate();
  let { index } = useParams();

  // On page load, load song details
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

  // Be able to delete a song. Return to index view.
  const handleDelete = () => {
    fetch(`${API}/songs/${index}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/songs'))
  };
  useEffect(() => {
    const { name } = song;
    setBackground(CSS.supports("background", name.toLowerCase()));
  }, [song.name]);

  return (
    <article
      style={{ backgroundSong: song.name }}
      className={!background ? "no-such-song" : null}
    >
      <h3>
        {song.isFavorite ? <span>⭐️</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {song.name}
      </h3>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
          {!background ? <h1>No such song</h1> : null}
        </div>
      </div>
    </article>
  );
}

export default SongDetails;