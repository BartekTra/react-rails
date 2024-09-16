import React from "react"
import { Link } from "react-router-dom"

function NavBar() {

  return (
    <nav>
      
          <Link to="/">Posts list</Link>
          
          {"  |  "}
        
          <Link to="/new">New Posts</Link>
        
    </nav>
  )
}

export default NavBar;