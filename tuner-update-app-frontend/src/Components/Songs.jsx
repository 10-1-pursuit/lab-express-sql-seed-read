import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;
console.log(API);

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`${API}/songs`)
          .then((res) => res.json())
          .then((res) => {
            setSongs(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-games">
      <h1>Songs Database:</h1>
      <table>
        <thead>
          <tr>
            <th>Song Name: </th>
            <th>Song Artist: </th>
            <th>Album/EP Name: </th>
            <th>Year Released: </th>
            <th>Genre: </th>
            <th>Favorite: </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item) => (
            <tr key={item.id} className="songlist">
              <td>
                <Link to={`/songs/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.name}</td>
              <td>{item.artist}</td>
              <td>{item.album}</td>
              <td>{item.year}</td>
              <td>{item.genre}</td>
              <td>{item.is_favorite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
