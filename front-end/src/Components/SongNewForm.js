import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    isfavorite: false,
  })

  const addedASong = () => {
    
    fetch(`${API}/songs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(song),
      
    })
      .then(res => res.json())
      .then(() => {
        navigate('/songs')
      })
      .catch((error) => console.error("catch", error))
  
    }

    const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isfavorite: !song.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addedASong();
  };


  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song's Name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album"
          onChange={handleTextChange}
        />
        <label htmlFor="description">Time:</label>
        <textarea
          id="time"
          name="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="Time"
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default SongNewForm