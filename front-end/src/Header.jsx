import React from "react"
import { Link } from "react-router-dom"

const Header =()=>{




    return(<>
    <header>
    <h1>TUNER APP</h1>
    <Link to="/songs"><button>Back to all Songs</button></Link>
   <Link to="/songs/create"><button>Create a Song</button></Link> 
    </header>
    </>)
}

export default Header