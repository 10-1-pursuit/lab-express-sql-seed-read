import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const Song = () => {
  const { id } = useParams();
  console.log(id);

  const [song, setSong] = useState([]);
const userErr = ''
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
    <div>
      <p>Song: {song.name}</p>
      <p>
        {" "}
        Artist: &nbsp;
        {song.artist}
      </p>
      <p> Album: {song.album}</p>
      Duration: &nbsp; {song.time}
    </div>
  );
};

export default Song;
