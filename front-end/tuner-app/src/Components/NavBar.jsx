import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <h1>
                <Link to="/albums">💿 All Albums 💿</Link>
            </h1>
        </nav>
    )
}

export default NavBar