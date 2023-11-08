import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const GetAllSongs = () => {
  const [foundSong, setFoundSong] = useState([]);
// const {id}=useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/songs`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setFoundSong(data);
        // console.log(setFoundSong)
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {foundSong.map((song,id) => {
        return (
          <div  className="song"id={song.id} key={id}>
           <Link to={`/songs/${id}`}> <h1>{song.name}</h1></Link>
            <h1>{song.artist}</h1>
            <h1>{song.time}</h1>
            <h1>{song.is_Favorite}</h1>
          </div>
        );
      })}
    </>
  );
};

export default GetAllSongs;