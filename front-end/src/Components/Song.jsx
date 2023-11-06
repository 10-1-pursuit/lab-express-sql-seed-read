import { Link } from 'react-router-dom';

function Song({ song }) {
  const { name, artist, time, is_favorite } = song;

  console.log(name, artist, time, is_favorite)
  
  return (
    <tr>
      <td>{is_favorite ? '⭐️' : ''}</td>
      <td>
        <Link to={`/songs/${song.id}`}>
          {name}
        </Link>
      </td>
      <td>{artist}</td> 
      <td>{time}</td>
    </tr>
  )
}

export default Song