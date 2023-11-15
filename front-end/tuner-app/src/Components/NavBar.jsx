import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <h1>
                <br/>
                <Link to="/albums/new"><button>💿 Add a New Album 💿</button></Link>
                <br/>
                <Link to="/albums">💿 All Albums 💿</Link>
            </h1>
        </nav>
    )
}

export default NavBar