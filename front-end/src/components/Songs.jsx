import { useEffect, useState } from "react";
import "../styles/Songs.css";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    console.log(`${API}/songs`)

    fetch(`${API}/songs`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! Status: ${r.status}`);
        }
        return r.json();
      })

      .then((r) => setSongs(r))

      .catch((err) => console.log("Error:", err));
  }, []);

  function handleSort(order) {
    setSort(order);
    const sortedSongs = [...songs].sort((a, b) => {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setSongs(sortedSongs);
  }

  return (
    <>
      <div>
        <label> Sort Order</label>
        <button onClick={() => handleSort("asc")}> ⬆</button>
        <button onClick={() => handleSort("desc")}>⬇</button>
      </div>
      <div className="container">
        {songs.map((song, id) => (
          <div className="all-songs container" key={song.id}>
            <img src={song.image_url} alt="Album" />
            <Link to={`/songs/${song.id}`}> {song.name}</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: song.is_favorite ? "red" : "black" }}>
              {song.is_favorite ? "Favorite" : ""}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Songs;
