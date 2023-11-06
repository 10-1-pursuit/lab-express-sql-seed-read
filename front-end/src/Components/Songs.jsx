import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import Song from './Song';

const API = process.env.REACT_APP_API_URL;
console.log(process.env)
function Songs() {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/songs`)
        .then(res => res.json())
        .then(res => {
          setSongs(res)
        })
    } catch (error) {
      return error
    }
  }

useEffect(() => {
  fetchData()
}, []) 

return (
  <Container>
    <section>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </tbody>
      </Table>
    </section>
  </Container>
);
}

export default Songs;
