import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <> 
            <nav> 
                <Link to="/">Home</Link>
                <Link to="../kanji">Kanji</Link>
                <Link to="../contact">Contact</Link>
                <Link to="../order">Products</Link>
                <Link to="../projects">Projects</Link>
                <Link to="../staff">Staff</Link>
                <Link to="../webdev">Web Dev</Link>
            </nav>
        </>
    );
}

export default Nav;