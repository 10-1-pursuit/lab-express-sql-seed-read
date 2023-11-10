import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Song from "./Song"

const API = import.meta.env.VITE_API_URL;

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
            <div>
            {songs.map((song)=>{
                return <Song key={song.id} song={song}/>
            })}
            </div>
            <br/>
            <div>
                <Link to={`/songs/new`}>
                    <button>🆕 Add a New Song 🎶</button>
                </Link>
            </div>
        </div>
    )
}

export default Songs
