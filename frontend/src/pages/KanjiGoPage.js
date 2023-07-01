import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import KanjiTable from '../components/KanjiTable';
import { CgAddR } from "react-icons/cg"


function KanjiGoPage( {jlpt, kanji, setKanjis} ) {

    const [roman, setRoman] = useState(false);
    const [hinted, setHinted] = useState(false);

    const toggleRomaji = () => {
        setRoman(!roman);
        if (roman) {
            
        }
    }

    const toggleHint = () => {
        setHinted(!hinted);
    }

    
    // useEffect(() => {
    //     toggleRomaji();
    // }, [roman]);

    // useEffect(() => {
    //     toggleHint();
    // }, [hinted]);


    return (
        <>
            <div className="titles-div">
                <h2 className='title-kanji'>Kanji Go</h2>
                <h2 className='title-jlpt'>JLPT {jlpt}</h2>
            </div>
            
            <div className="main-kanji-char">
                {kanji}
            </div>

            <div className="titles-div">
                <button className="romaji-hint-button" onClick={() => toggleRomaji()}>Romaji</button>
                <button className="romaji-hint-button" onClick={() => toggleHint()}>Hint</button>
            </div>
        </>
    );

}

export default KanjiGoPage;