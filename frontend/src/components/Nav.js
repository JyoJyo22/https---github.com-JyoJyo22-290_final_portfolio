import React from "react";
import { Link } from "react-router-dom";

function Nav(setImageURL) {

    const handleImage = () => {
        setImageURL("default URL");
    }

    return(
        <> 
            <nav> 
                <Link to="/" onClick={() => handleImage()}>Kanji Go</Link>
                <Link to="../kanji-list" onClick={() => handleImage()}>Kanji List</Link>
                <Link to="../projects" onClick={() => handleImage()}>Kanji Pics</Link>
                <Link to="../about" onClick={() => handleImage()}>About</Link>
                <Link to="../contact" onClick={() => handleImage()}>Contact</Link>
                {/* <Link to="../order">Products</Link> */}
                {/* <Link to="../staff">Staff</Link>
                <Link to="../webdev">Web Dev</Link> */}
            </nav>
        </>
    );
}

export default Nav;