import {useState, useEffect} from "react"
import Album from "./Album"

const API = import.meta.env.VITE_API_URL;

function Albums(){
    const [albums, setAlbums] = useState([])

useEffect(()=>{
    try {
        fetch(`${API}/albums`)
        .then((res)=>{
            return res.json()
        })
        .then((resJSON)=>{
            setAlbums(resJSON)
        })} 
    catch (error) {console.error(error) 
        }}, [])

    return (
        <div>
            {albums.map((album)=>{
                return <Album key={album.id} album={album}/>
            })}
        </div>
    )

}

export default Albums;