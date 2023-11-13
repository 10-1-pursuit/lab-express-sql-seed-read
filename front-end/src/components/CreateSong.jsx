import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"


const CreateASong = () => {
    const API = import.meta.env.VITE_API_URL;

   

    const [newSong, setNewSong] = useState(
        {
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: ""
        }
    );



const fetchData = async () => {
        const songData = {
            name: newSong.name,
            artist: newSong.artist,
            album: newSong.album,
            time: newSong.time,
            is_favorite: newSong.is_favorite}

        
        try {
          const response = await fetch(`${API}/songs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(songData)
          });
  
          if (!response.ok) {
            throw new Error(`Request failed with the status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
              
        
          
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
    fetchData();
    
    
    const handleTextChange = (event) => {
        setNewSong({ ...newSong, [event.target.name]: event.target.value })
    };
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/songs`)
    };


    return (<>
        <div>

            <form onSubmit={handleSubmit}>
                <label>SONG NAME
                    <input id="name"
                     value={newSong.name}
                     type="text"
                     onChange={handleTextChange}
                     ></input>
                </label>

                <label>ARTIST
                    <input id="artist"
                     value={newSong.artist}
                     type="text"
                     onChange={handleTextChange}></input>
                </label>

                <label>ALBUM
                    <input id="album"
                     value={newSong.album}
                     type="text"
                     onChange={handleTextChange}></input>
                </label>


                <label>TIME
                    <input id="time"
                     value={newSong.time}
                     type="text"
                     onChange={handleTextChange}
                    ></input>
                </label>

                <label>IS FAVORITE
                    <input id="favorite"
                     value={newSong.is_favorite}
                     type="text"
                     onChange={handleTextChange}></input>
                </label>
                <button type="submit">Create Song!</button>
            </form>


        </div>
        





    </>)





};
export default CreateASong