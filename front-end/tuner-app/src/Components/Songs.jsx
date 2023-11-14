import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import Song from "./Song"
import SongNewForm from "./SongNewForm";

const API = import.meta.env.VITE_API_URL;

function Songs() {
    const [songs, setSongs] = useState([])
    let{id} = useParams()

const handleNewSong = (newSong)=>{
    fetch(`${API}/albums/${id}/songs`, {
        method: "POST",
        body: JSON.stringify(newSong),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((resJSON)=>{
        setSongs([resJSON, ...songs])
    })
    .catch((error)=>console.error("catch", error))
};

const handleDeleteSong = (id)=>{
    fetch(`${API}/albums/${id}/songs/${id}`, {
        method: "DELETE"
    })
        .then(
            ()=>{
                const copySongsArray = [...songs]
                const indexDeletedSong = copySongsArray.findIndex((song)=>{
                    return song.id === id
                })
                copySongsArray.splice(indexDeletedSong, 1)
                setSongs(copySongsArray)
            },
            (error) => console.error(error)
        )
        .catch((error)=> console.warn("catch", error))
};

const handleSongEdit = (updatedSong)=>{
    fetch(`${API}/albums/${id}/songs/${updatedSong.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedSong),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res)=>res.json())
    .then((resJSON)=>{
        const copySongsArray = [...songs]
        const indexUpdatedSong = copySongsArray.findIndex((song)=>{
            return song.id === updatedSong.id
        })
        copySongsArray[indexUpdatedSong] = resJSON
        setSongs(copySongsArray)
    })
    .catch((error)=>console.error(error))
};

useEffect(()=>{
    fetch(`${API}/albums/${id}/songs`)
        .then((res)=>res.json())
        .then((res)=>{
            setSongs(res.allSongs)
        })
}, [id, API]);

return (
    <div>
        <h4>Songs</h4>
        <SongNewForm handleNewSongSubmit={handleNewSong}>
            <h4>Add a New Song</h4>
        </SongNewForm>
        {songs.map((song)=>{
            <Song key={song.id}
            song={song}
            handleSongDelete={handleDeleteSong}
            handleSongEditSubmit={handleSongEdit}/>
        })}
    </div>
)

}

export default Songs
