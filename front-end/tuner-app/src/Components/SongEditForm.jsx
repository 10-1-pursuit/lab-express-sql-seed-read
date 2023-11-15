// import {useState, useEffect} from "react"
// import {useParams, Link, useNavigate} from "react-router-dom"

// const API = import.meta.env.VITE_API_URL

// function SongEditForm() {
//     const navigate = useNavigate()
//     let {index} = useParams()

//     const [song, setSong] = useState({
//         name: "",
//         artist: "",
//         album: "",
//         time: "",
//         is_favorite: false
//     })
//     const handleEditFormTextChange = (e)=>{
//         setSong({ ...song, [e.target.id]: e.target.value})
//     }
//     const handleEditIsFavoriteCheckboxChange =()=>{
//         setSong({ ...song, is_favorite : !song.is_favorite})
//     }

//     const updateSong = ()=>{
//         const editedSongData = {
//                 name: song.name,
//                 artist: song.artist,
//                 album: song.album,
//                 time: song.time,
//                 is_favorite: song.is_favorite
//             }
//         try {
//             fetch(`${API}/songs/${index}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(editedSongData)
//             })
//             .then(res=>res.json())
//             .then(()=>navigate(`/songs/${index}`))

//         } catch (error) {
//             return error
//         }
//     }
//     const handleEditFormSubmit = (e)=>{
//         e.preventDefault()
//             updateSong()
        
//     }
    
//     return (
//         <div>
//             <h3>🛠️ Edit Song 🛠️</h3>
//             <h5>
//             <form onSubmit={handleEditFormSubmit}>
//                 <label htmlFor="name">🎶 Title of Song 🎶</label>
//                 <br/>
//                 <input
//                     id="name"
//                     value={song.name}
//                     type="text"
//                     onChange={handleEditFormTextChange}
//                     placeholder="Song Name"
//                     required
//                 />
//                 <br/>
//                 <br/>
//                 <label htmlFor="artist">🎤 Name of Artist 🎤</label>
//                 <br/>
//                 <input
//                     id="artist"
//                     value={song.artist}
//                     type="text"
//                     onChange={handleEditFormTextChange}
//                     placeholder="Name of Artist"
//                     required
//                 />
//                 <br/>
//                 <br/>
//                 <label htmlFor="album">💿 Name of Album 💿</label>
//                 <br/>
//                 <input
//                     id="album"
//                     value={song.album}
//                     type="text"
//                     onChange={handleEditFormTextChange}
//                     placeholder="Name of Album"
//                     required
//                 />
//                 <br/>
//                 <br/>
//                 <label htmlFor="">✨ If Song is Favorite ✨</label>
//                 <br/>
//                 check box ➡️
//                 <input
//                     id="isFavorite"
//                     type="checkbox"
//                     onChange={handleEditIsFavoriteCheckboxChange}
//                     checked={song.is_favorite}
//                 />
//                 <br/>
//                 <br/>
//                 <label htmlFor="time">⏱️ Song Runtime ⏱️</label>
//                 <br/>
//                 <input
//                     id="time"
//                     value={song.time}
//                     type="text"
//                     onChange={handleEditFormTextChange}
//                     placeholder="Song Runtime"
//                     required
//                 />
//                 <br/>
//                 <br/>
//                 <button type="submit"> 🛠️ Edit Song 🛠️</button>
//             </form>
//             </h5>
//                 <br/>
//                 <Link to={`/songs/${index}`}>
//                     <button>🚧 Don't Edit! 🚧<br/>🔙 Return to<br/>🎧 All Songs 🎧</button>
//                 </Link>
//         </div>
//     )
// }

// export default SongEditForm