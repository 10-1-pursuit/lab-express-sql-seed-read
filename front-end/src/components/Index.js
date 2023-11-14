import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Index() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/songs");
        const data = response.data;
        setSongs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Songs</h1>
      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item">
            <Link to={`/show/${song.id}`} className="text-decoration-none">
              {song.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
