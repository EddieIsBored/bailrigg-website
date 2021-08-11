import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
    <nav>
        <h1> Bailrigg FM </h1>
        <div className = "links"> 
            <Link to ="/"> Home </Link>
            <Link to ="/about"> About </Link>
            <Link to ="/contact"> Contact </Link>
            <Link to ="/playlist"> Playlist </Link>
            <Link to ="/schedule"> Schedule </Link>
            <Link to ="/shows"> Shows </Link>
        </div>
    </nav>
    )
}

export default Navbar