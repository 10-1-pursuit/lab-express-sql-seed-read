import {useState} from "react";
import SongForm from "./SongForm";

function Song({song, handleSongDelete, handleSongEditSubmit}){
    const[viewSongEditForm, setViewSongEditForm] = useState(false)
    const toggleEditFormView = ()=>{
        setViewSongEditForm(!viewSongEditForm)
        console.log(song)
    };
    return (
        <div>
            <div>
                {viewSongEditForm ? (
                <SongForm
                    songDetails={song}
                    toggleEditFormView={toggleEditFormView}
                    handleSongEditSubmit={handleSongEditSubmit}/>
                ) : (
                    <div>
                        <h5>
                            Song Title: {song.title}
                            Artist: {song.song_artist}
                            Album: {song.album_name}
                            Runtime: {song.time}
                            Favorite Song: {song.is_favorite_song}
                        </h5>
                        <button onClick={toggleEditFormView}>
                            {viewSongEditForm ? "Don't Edit Song!" : "Edit This Song!"}
                        </button>
                        <button onClick={()=> handleSongDelete(song.id)}>
                            Delete this Song!!
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}



export default Song;