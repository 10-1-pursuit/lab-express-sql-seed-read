import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        fetch(`${API}/songs/${id}`)
          .then((res) => res.json())
          .then((res) => {
            setSong(res);
          });
      } catch (error) {
        console.log(error)
      }
    };
    fetchSong();
  }, [id,API]);

  // Be able to delete a Song. Return to id view.
  const deleteSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then( () => navigate(`/songs`) )
      .catch((error) => console.log("catch", error));
  }
  
      

  return (
    <article className="songDetails"
    >
      <h3>
        {song.is_Favorite ? <span>⭐️</span> : null}
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
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={deleteSong}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
