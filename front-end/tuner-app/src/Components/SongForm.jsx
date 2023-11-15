import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function SongForm({songDetails, toggleEditFormView, handleNewSongSubmit, handleSongEdit, children}){
    let {id} = useParams();

    const [song, setSong] = useState({
        title: "",
        song_artist: "",
        album_name: "", 
        time: "",
        is_favorite_song: false,
        album_id: id
    })

    const handleSongTextChange = (e)=>{
        setSong({ ...song, [e.target.id]: e.target.value})
    }

    const handleSongCheckboxChange = ()=>{
        setSong({ ...song, is_favorite_song: !song.is_favorite_song})
    }

    useEffect(()=>{
        if (songDetails) {
            setSong(songDetails)
        }
    }, [id, songDetails])
    
    const onSubmit = (e)=>{
        e.preventDefault()
        handleNewSongSubmit(song)
        if (songDetails){
            toggleEditFormView()
        }
        setSong({
            title: "",
            song_artist: "",
            album_name: "", 
            time: "",
            is_favorite_song: "",
            album_id: id
        })
    }
    return (
        <div>
            {children}
            <form onSubmit={onSubmit}>
                <label htmlFor="name">🎶 Title of Song 🎶 </label>
                <br/>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleSongTextChange}
                    placeholder="Title of Song"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="artist">🎤 Name of Artist 🎤</label>
                <br/>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleSongTextChange}
                    placeholder="Name of Artist"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="album">💿 Name of Album 💿</label>
                <br/>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleSongTextChange}
                    placeholder="Name of Album"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="">✨ If Song is Favorite ✨</label>
                <br/>
                check box ➡️
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleSongCheckboxChange}
                    checked={song.is_favorite}
                /> 
                <br/>
                <br/>
                <label htmlFor="time">⏱️ Song Runtime ⏱️</label>
                <br/>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleSongTextChange}
                    placeholder="Song Runtime"
                    required
                />
                <br/>
                <br/>
                <input type="submit"/>
            </form>

        </div>
    )
}



export default SongForm;
