import { Link } from "react-router-dom";

function Album ({album}) {
    // console.log(album)
    return (
        <div>
            <Link to={`/albums/${album.id}`}><h5> Album Name: {album.name}<br/>Artist: {album.artist}<br/>Year Released: {album.year_released}<br/>Rating: {album.rating}<br/>Favorite: {album.is_favorite_album ? <span>❤️</span> : <span>💔</span>}</h5></Link>
        </div>
    )
}

export default Album;