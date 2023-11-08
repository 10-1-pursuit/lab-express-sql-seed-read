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
        is_favorite:false})

        const navigate=useNavigate()
        const {id}=useParams()
        const handleDelete = () => {

            const deleteSong = async () => {
          
               
                try {
                  const response = await fetch(`${API}/songs/${id}`, {
                    method: "DELETE" }
                   
                  )
          
                  if (!response.ok) {
                    throw new Error(`Request failed with the status: ${response.status}`);
                  }
          
                  const data = await response.json();
                   console.log(data);
                      
                    navigate(`/songs`)
                  
                } catch (error) {
                    console.error("Fetch error:", error);
                }
            };
            deleteSong();
            
          
        
        
        
          };

        useEffect(() => {
            const fetchSong = async () => {
              try {
                fetch(`${API}/songs/${id}`)
                  .then(res => res.json())
                  .then(data => {
                    setSong(data)
                  })
              } catch (error) {
                return error
              }
            }
            fetchSong()
          }, []) 
    return(<>
    {/* <Link to={`/songs`}>
    <button>Back to All Songs</button>
    </Link> */}
    <button onSubmit={handleDelete}>Delete Song</button>
    
    
    
    <div key={song.id}>
        <h1>{song.name}</h1>
        <h1>{song.artist}</h1>
        <h1>{song.time}</h1>
        <h1>{song.album}</h1>
        <h1>{song.is_favorite?"❤️":"🤬"}</h1>
    </div>

    <Link to="/songs/:id/edit"><button>edit/update</button></Link>
    
    
    </>)
}
export default SingleSong