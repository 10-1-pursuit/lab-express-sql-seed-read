import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>
        {song.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/colors/${song.id}`}> {color.name}</Link>
      </td>
      <td>
        {" "}
        <span style={{ backgroundColor: color.name }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </td>
    </tr>
  );
}

export default Color;
