import {useState} from "react";
import {useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_APP_URL;


function AlbumNewForm() {
    const navigate = useNavigate();
    const [album, setAlbum] = useState({
        name: "",
        artist: "",
        year_released: "",
        rating: "",
        is_favorite_album: false
    })

    const addAlbum = ()=>{
        const newAlbumData = {
            name: album.name,
            artist: album.artist,
            year_released: album.year_released,
            rating: album.rating,
            is_favorite_album: false
        }

        fetch(`${API}/albums`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlbumData),
        })
        
        .then(()=>{
            navigate(`/albums`)
        })
        .catch((error)=>console.error("catch", error))
    };

        const handleNewFormTextChange = (e)=>{
            setAlbum({ ...album, [e.target.id]: e.target.value})
        };

        const handleNewFormCheckBoxChange = ()=>{
            setAlbum({ ...album, is_favorite_album: !album.is_favorite_album})
        };

        const handleNewFormSubmit = (e)=>{
            e.preventDefault()
            addAlbum()
        }
    
    
    return (
        <div>
            <form onSubmit={handleNewFormSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                id="name"
                value={album.name}
                type="text"
                onChange={handleNewFormTextChange}
                placeholder="Album Name"
                required
                />
                <br/>
                <label htmlFor="artist"> Artist: </label>
                <input
                id="artist"
                value={album.artist}
                type="text"
                onChange={handleNewFormTextChange}
                placeholder="Artist Name"
                required
                />
                <br/>
                <label htmlFor="year_released"> Year Released: </label>
                <input
                id="year_released"
                value={album.year_released}
                type="text"
                onChange={handleNewFormTextChange}
                placeholder="Year Released"
                required
                />
                <br/>
                <label htmlFor="rating"> Rating: </label>
                <input
                id="rating"
                value={album.rating}
                type="text"
                onChange={handleNewFormTextChange}
                placeholder="Ex: E"
                required
                />
                <br/>
                <label htmlFor="favorite"> Favorite: </label>
                <input
                id="favorite"
                value={album.name}
                type="checkbox"
                onChange={handleNewFormCheckBoxChange}
                checked={album.is_favorite_album}
                />
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AlbumNewForm