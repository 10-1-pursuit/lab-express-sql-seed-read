import React,{useState,useEffect} from "react";
import {Link,useParams,useNavigate} from "react-router-dom"

const API =import.meta.env.VITE_API_URL


const SingleSong=()=>{
    const[song,setSong]=useState({
        id:"",
        name:"",
        artist:"",
        album:"",
        time:"",
        is_favorite:""})

        const navigate=useNavigate()
        const {id}=useParams()

        useEffect(() => {
            const fetchSong = async () => {
              try {
                fetch(`${API}/songs/${id}`)
                  .then(res => res.json())
                  .then(res => {
                    setSong(res)
                  })
              } catch (error) {
                return error
              }
            }
            fetchSong()
          }, []) 
    return(<>
    <Link to={`/songs`}>
    <button>Back to All Songs</button>
    </Link>
    
    
    
    <div key={song.id}>
        <h1>{song.name}</h1>
        <h1>{song.artist}</h1>
        <h1>{song.time}</h1>
        <h1>{song.is_favorite}</h1>
    </div>
    
    
    
    </>)
}
export default SingleSong