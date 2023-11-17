import React, {useEffect, useState} from 'react'
import  Song  from './Song'

const API = process.env.REACT_APP_API_URL;


function Songs () {

    const [songs, setsongs] = useState([]);

    const fetchData = async () => {
        try { 
            fetch(`${API}/songs`)
                .then(response => response.json())
                .then(response => {
                  setsongs(response) 
                })
        } catch (e) {
          console.log(e)
        }
    }

    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs
