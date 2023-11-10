import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <h1>
                <Link to="/songs">🎧 All Songs 🎧</Link>
            </h1>
        </nav>
    )
}

export default NavBar