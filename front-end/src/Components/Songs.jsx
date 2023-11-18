import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/songs`)
        .then(res => res.json())
        .then(res => {
          setSongs(res)
        })
    } catch (error) {
      return error
    }
  }

  // GET all Songs
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>See this song</th>
              <th>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
