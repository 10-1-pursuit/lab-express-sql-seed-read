
import React,{useState,useEffect} from "react";
import {useParams,Link,useNavigate} from "react-router-dom"

const EditSong =()=>{
    const API =import.meta.env.VITE_API_URL

 
    const navigate=useNavigate()
    const [editedSong, setEditedSong] = useState(
        {
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: ""
        }
    );
const handleTextChange=(event)=>{
  

    setEditedSong({...editedSong,[event.target.name]:event.target.value})
}

const fetchData = async () => {
    const {id}= useParams()
    const songData = {
        name: editedSong.name,
        artist: editedSong.artist,
        album: editedSong.album,
        time: editedSong.time,
        is_favorite: editedSong.is_favorite}

    
    try {
      const response = await fetch(`${API}/songs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData)
      });

      if (!response.ok) {
        throw new Error(`Request failed with the status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      navigate(`/songs/`)
          
    
      
    } catch (error) {
        console.error("Fetch error:", error);
    }

;};
const handleSubmit=(event)=>{
event.preventDefault()

fetchData()
}








    return (<>
    <div>

<form onSubmit={handleSubmit}>
    <label>SONG NAME
        <input name="name"
         value={editedSong.name}
         type="text"
         onChange={handleTextChange}
         ></input>
    </label>

    <label>ARTIST
        <input name="artist"
         value={editedSong.artist}
         type="text"
         onChange={handleTextChange}></input>
    </label>

    <label>ALBUM
        <input name="album"
         value={editedSong.album}
         type="text"
         onChange={handleTextChange}></input>
    </label>


    <label>TIME
        <input name="time"
         value={editedSong.time}
         type="text"
         onChange={handleTextChange}
        ></input>
    </label>

    <label>IS FAVORITE
        <input name="favorite"
         value={editedSong.is_favorite}
         type="text"
         onChange={handleTextChange}></input>
    </label>
    <button type="submit">Update Song!</button>
</form>


</div>


    
    
    
    
    </>)
}


export default EditSong


