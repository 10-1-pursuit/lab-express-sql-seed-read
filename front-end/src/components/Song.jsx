import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SongEditForm from "./SongEditForm";
import VideoPlayer from "./VideoPlayer";

const API = process.env.REACT_APP_API_URL;

const Song = () => {
  const { id } = useParams();
  console.log(id);

  const [song, setSong] = useState([]);
  // const userErr = ''
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setSong(res))
      .catch((err) => console.log("Error:", err));
  }, [id]);

  return (
    <>
      <div>
        <img src={song.image_url} alt="Album" />
        <p>Song: {song.name}</p>
        <p>
          {" "}
          Artist: &nbsp;
          {song.artist}
        </p>
        <p> Album: {song.album} </p>
        Duration: &nbsp; {song.time}
        <div>
          <button style={{borderRadius:".7em"}}>
            <Link to={`song.video_url`}> Video Link</Link>
          </button>
        </div>
      </div>
      <div>
        {/* <SongEditForm /> */}
        <button style={{padding:"12px", borderRadius:".7em"}}>
          <Link to={`/songs/${id}/edit`}> Edit </Link>
        </button>
      </div>
    </>
  );
};

export default Song;
