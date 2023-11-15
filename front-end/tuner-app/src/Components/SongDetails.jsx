// import {Link, useParams, useNavigate} from "react-router-dom"
// import {useState, useEffect} from "react"

// const API = import.meta.env.VITE_API_URL

// function SongDetail() {
//     const [song, setSong] = useState({
//         name: "",
//         artist: "",
//         album: "",
//         time: "",
//         is_favorite: ""
//     })
//     let navigate = useNavigate()
//     let {index} = useParams()

//     useEffect(()=>{
//         const fetchOneSong = async ()=>{
//             try {
//                 fetch(`${API}/songs/${index}`)
//                 .then(res=>res.json())
//                 .then(res=>{
//                     setSong(res)
//                 })
//             } catch (error) {
//                 return error
//             }
//         }
//         fetchOneSong()
//     }, [])

//     const handleDeleteSong = ()=>{
//         try {
//             fetch(`${API}/songs/${index}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(song)
//             })
//             .then(res=>res.json())
//             .then(()=>navigate('/songs'))
//         } catch (error) {
//             return error
//         }
//     }

//     return (
//         <div>
//             <h5>
//                 🎶 Song 🎶: 
//                 <br/>
//                 {song.name}
//                 <br/>
//                 <br/>
//                🎤 Artist 🎤: 
//                 <br/>
//                 {song.artist}
//                 <br/>
//                 <br/>
//                 💿 Album 💿:
//                 <br/>
//                 {song.album}
//                 <br/>
//                 <br/>
//                ⏱️ Time ⏱️: 
//                 <br/>
//                 {song.time}
//                 <br/>
//                 <br/>
//                 ✨ Is Favorite ✨: {song.is_favorite ? <span>❤️</span> : <span>💔</span>}
//             </h5>
//             <div>
//                 <Link to={`/songs`}>
//                     <button>🎶 Back to All Songs 🎶</button>
//                 </Link>
//                 <br/>
//                 <br/>
//                 <Link to={`/songs/${index}/edit`}>
//                     <button>🛠️ Edit Song 🛠️</button>
//                 </Link>
//             </div>
//             <br/>
//             <button onClick={handleDeleteSong}> ❌ Delete this Song ❌</button>
//         </div>
//     )
// }

// export default SongDetail