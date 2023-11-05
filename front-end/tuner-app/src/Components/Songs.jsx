import {useState, useEffect} from "react"
import Song from "./Song"

const API = import.meta.env.VITE_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([])

    useEffect (()=>{
        const fetchData = async ()=>{
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
        fetchData()
    }, 
    []
    )

    return (
        <div>
            {songs.map((song)=>{
                return <Song key={song.id} song={song}/>
            })}
        </div>
    )
}

export default Songs
