import React from "react";


function IntraNav( {jlpt, setJlpt, setKanjis} ) {

    // set the current JLPT section
    const changeJlpt = async (newJlpt) => {
        setJlpt(newJlpt);
        loadKanji(newJlpt);

        // make this button :active in css
        
    }

    // RETRIEVE the entire list of kanji for the current JLPT section
    const loadKanji = async (jlpt) => {
        const response = await fetch(`/get/${jlpt}`, { method: 'GET' });     // JLPT param turns into a string here
        const newKanjis = await response.json();
        setKanjis(newKanjis);
    }

    
    return (

    <nav className="intra-nav">
        <a id={ jlpt===1 ? "active" : null} onClick={() => changeJlpt(1)}>JLPT <br></br> N1</a>
        <a id={ jlpt===2 ? "active" : null} onClick={() => changeJlpt(2)}>JLPT <br></br> N2</a>
        <a id={ jlpt===3 ? "active" : null} onClick={() => changeJlpt(3)}>JLPT <br></br> N3</a>
        <a id={ jlpt===4 ? "active" : null} onClick={() => changeJlpt(4)}>JLPT <br></br> N4</a>
        <a id={ jlpt===5 ? "active" : null} onClick={() => changeJlpt(5)}>JLPT <br></br> N5</a>
    </nav>

    );
}

export default IntraNav;

