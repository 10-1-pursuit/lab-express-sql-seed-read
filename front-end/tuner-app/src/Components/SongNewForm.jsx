// import {useState} from "react"
// import { useNavigate,Link } from "react-router-dom"

// const API = import.meta.env.VITE_API_URL

// function SongNewForm() {
//     const navigate = useNavigate()
//     const [song, setSong] = useState({
//         name: "",
//         artist: "",
//         album: "",
//         time: "",
//         is_favorite: false
//     })
//     const addNewSong = ()=>{
//         const newSongData = {
//             name: song.name,
//             artist: song.artist,
//             album: song.album,
//             time: song.time,
//             is_favorite: song.is_favorite
//         }
//         try {
//             fetch(`${API}/songs`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newSongData)
//             })
//             .then(res=>res.json())
//             .then(()=>navigate('/songs'))

//         } catch (error) {
//             return error
//         }
//     }
//     const handleNewFormTextChange = (e)=>{
//         setSong({ ... song, [e.target.id]: e.target.value})
//     }
//     const handleIsFavoriteCheckboxChange = ()=>{
//         setSong({ ...song, is_favorite: !song.is_favorite})
//     }
//     const handleNewFormSubmit = (e)=>{
//         e.preventDefault()
//         addNewSong()
//     }
//     return (
//         <div>
//             <h3>🆕 Add a New Song 🎶</h3>
//             <h5>
//             <form onSubmit={handleNewFormSubmit}>
//                 <label htmlFor="name">🎶 Title of Song 🎶 </label>
//                 <br/>
//                 <input
//                     id="name"
//                     value={song.name}
//                     type="text"
//                     onChange={handleNewFormTextChange}
//                     placeholder="Title of Song"
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
//                     onChange={handleNewFormTextChange}
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
//                     onChange={handleNewFormTextChange}
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
//                     onChange={handleIsFavoriteCheckboxChange}
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
//                     onChange={handleNewFormTextChange}
//                     placeholder="Song Runtime"
//                     required
//                 />
//                 <br/>
//                 <br/>
//                 <button type="submit"> ✅ Add New Song ✅</button>
//             </form>
//             </h5>
//             <br/>
//             <Link to={`/songs`}>
//                 <button>⚠️ Don't add! ⚠️ <br/>🔙 Return to <br/> 🎧 All Songs 🎧</button>
//             </Link>
//         </div>
//     )
// }

// export default SongNewForm