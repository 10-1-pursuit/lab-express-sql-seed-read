import { Link } from "react-router-dom";

function Song({ song, onToggleFavorite }) {
  const { id, name, artist, time, is_favorite } = song;

  return (
    <tr>
      <td>
        <span
          role="img"
          aria-label="Favorite"
          onClick={() => onToggleFavorite(id, is_favorite)}
          style={{ cursor: "pointer" }}
        >
          {is_favorite ? "⭐" : "☆"}
        </span>
      </td>
      <td>
        <Link to={`/songs/${id}`}>{name}</Link>
      </td>
      <td>{artist}</td>
      <td>{time}</td>
    </tr>
  );
}

export default Song;
