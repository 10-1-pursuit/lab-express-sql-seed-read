import {Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Songs from "./Songs"

const API = import.meta.env.VITE_APP_URL

function AlbumDetails(){
    const[album, setAlbum] = useState([])
    let navigate = useNavigate()
    let {id} = useParams()

    useEffect(()=>{
            fetch(`${API}/albums/${id}`)
            .then((response)=>response.json())
            .then((responseJSON)=>setAlbum(responseJSON))
            .catch ((error)=> console.error(error)) 
    }, [id, API]);

    useEffect(()=>{}, [album.name]);
    
    const handleDeleteAlbum = ()=>{
        deleteAlbum()
    };

    const deleteAlbum =()=>{
        try {
            fetch(`${API}/albums/${id}`, {
                method: "DELETE"
            })
            .then(()=>navigate(`/albums`))
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <h5> 
                Album Name: {album.name}<br/>
                Artist: {album.artist}<br/>
                Year Released: {album.year_released}<br/>
                Rating: {album.rating}<br/>
                Favorite: {album.is_favorite_album ? <span>❤️</span> : <span>💔</span>}<br/>
            </h5>
            <div>
                <Link to={`/albums`}> 
                <button>Back to all Albums</button></Link>
            </div>
            <div>
                <Link to={`/albums/${id}/edit`}> 
                <button>Edit Album</button></Link>
            </div>
            <Songs/>
        </div>
    )
}

export default AlbumDetails;