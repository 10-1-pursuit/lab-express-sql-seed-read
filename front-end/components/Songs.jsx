import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Songs() {
const [songsArray, setsongsArray] = useState([]);
 const API = import.meta.env.REACT_APP_API_URL;



  useEffect(() => {
    async function fetchSongsData() {

      try {
        fetch(`${API}/songs`)
        .then(res => res.json())
        .then(res => setsongsArray(res));
      } catch (e) {
        console.log(e);
      }
    }

    fetchSongsData();

  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songsArray.map((song) => (
          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>
              {song.name} - {song.artist} ({song.time})
            </Link>
            <span>{song.is_favorite ? ' - Favorite' : ''}</span>
          </li>
        ))}
      </ul>
      <Link to="/songs/new">
        <button>Add New Song</button>
      </Link>
    </div>
  );
};

export default Songs;