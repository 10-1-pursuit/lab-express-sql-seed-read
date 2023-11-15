import {useState, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

function AlbumEditForm (){
    let {id} = useParams();
    const navigate = useNavigate();

    const [album, setAlbum] = useState({
        name: "",
        artist: "",
        year_released: "",
        rating: "",
        is_favorite_album: false
    })

    const handleAlbumTextChange = (e)=>{
        setAlbum({ ...album, [e.target.id]: e.target.value})
    }

    const handleAlbumCheckBoxChange = ()=>{
        setAlbum({ ...album, is_favorite_album: !album.is_favorite_album})
    }

    const updateAlbum = ()=>{
        const editedAlbumData = {
            name: album.name,
            artist: album.artist,
            year_released: album.year_released,
            rating: album.rating,
            is_favorite_album: false
        }
        fetch(`${API}/albums/${id}`, {
            method:"PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedAlbumData),
        })
        .then((response)=>response.json())
        .then(()=>{
            navigate(`/albums/${id}`)
        })
        .catch((error)=> console.error(error))  
    };

    useEffect(()=>{
        fetch(`${API}/albums/${id}`)
            .then((response)=>{
                return response.json()
            })
            .then((responseJSON)=>{
                setAlbum(responseJSON)
            })
            .catch((error)=>console.error(error))
    }, [id]);

    const handleAlbumSubmit = (event)=>{
        event.preventDefault()
        updateAlbum()
    };

    return (
        <div>
            <form onSubmit={handleAlbumSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                id="name"
                value={album.name}
                type="text"
                onChange={handleAlbumTextChange}
                placeholder="Album Name"
                required
                />
                <br/>
                <label htmlFor="artist"> Artist: </label>
                <input
                id="artist"
                value={album.artist}
                type="text"
                onChange={handleAlbumTextChange}
                placeholder="Artist Name"
                required
                />
                <br/>
                <label htmlFor="year_released"> Year Released: </label>
                <input
                id="year_released"
                value={album.year_released}
                type="text"
                onChange={handleAlbumTextChange}
                placeholder="Year Released"
                required
                />
                <br/>
                <label htmlFor="rating"> Rating: </label>
                <input
                id="rating"
                value={album.rating}
                type="text"
                onChange={handleAlbumTextChange}
                placeholder="Ex: E"
                required
                />
                <br/>
                <label htmlFor="favorite"> Favorite: </label>
                <input
                id="favorite"
                value={album.name}
                type="checkbox"
                onChange={handleAlbumCheckBoxChange}
                checked={album.is_favorite_album}
                />
                <br/>
                <input type="submit"/>
            </form>
            <Link to={`/albums/${id}`}>
                <button>Don't Edit!</button>
            </Link>
        </div>
    )
};

export default AlbumEditForm;