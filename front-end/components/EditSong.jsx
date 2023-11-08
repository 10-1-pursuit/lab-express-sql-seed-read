import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditSong = () => {
    const {id}  = useParams();
    const navigate = useNavigate();

    const [songData, setSongData] = useState({
        name: '',
        artist: '',
        album: '',
        is_favorite: false,
        time: ''
    });

    useEffect(() => {
        fetch(`http://localhost:3000/songs/${id}`)
       .then(res => res.json())
       .then(data => {
       setSongData(data);
    })
       .catch((error) => {
        console.log("Fetch error:", error);
       });
    }, [id]);

    const handleChange = (e) => {
        const {name, value, type , checked} = e.target;
        const newValue = type === 'checkbox'? checked : value;
        setSongData({
           ...songData,
            [name]: newValue
        });
    };

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/songs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
    })
   .then(res => res.json())
   .then(() => {
   navigate('/songs');
   })
   .catch ((error) => {
console.error
    ("Update error", error);
   console.log(songData)
});
};

return (
    <div>
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={songData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={songData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            name="album"
            value={songData.album}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={songData.is_favorite}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={songData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditSong;
