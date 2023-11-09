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

const toggleFavorite = async (id, isFavorite) => {
  try {
    const response = await fetch(`${API}/songs/${id}/favorite`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ is_favorite: !isFavorite }),
    });

    // This if statement updates songs state by creating a new array where favorite status of a specific 
    // song using matching id is toggled, for other songs with different id valuesremain unchanged.
    if (response.ok) {
      setSongs((prevSongs) =>
        prevSongs.map((song) =>
          song.id === id ? { ...song, is_favorite: !isFavorite } : song
        )
      );
    } else {
      console.error('Error toggling favorite status');
    }
  } catch (err) {
    console.error('Error toggling favorite status:', err);
  }
};

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
              <Song key={song.id} song={song} onToggleFavorite={toggleFavorite} />
            ))}
        </tbody>
      </Table>
    </section>
  </Container>
);
}

export default Songs;
