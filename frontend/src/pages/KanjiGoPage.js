import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import KanjiTable from '../components/KanjiTable';
import { CgAddR } from "react-icons/cg"


function KanjiGoPage( {jlpt, setKanji} ) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [kanjis, setKanjis] = useState([]);

    // RETRIEVE the entire list of kanji
    const loadKanji = async () => {
        const response = await fetch('/get', { method: 'GET' });
        const kanjis = await response.json();
        setKanjis(kanjis);
    } 


    // CREATE a new single kanji
    const onCreateKanji = async () => {
        redirect("/kanji-create");
    }


    // UPDATE a single kanji
    const onEditKanji = async currKanji => {
        setKanji(currKanji);
        redirect("/kanji-edit");
    }


    // DELETE a single kanji  
    const onDeleteKanji = async _id => {
        const response = await fetch(`/delete/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/get');
            const kanjis = await getResponse.json();    // change duplicate var name here
            setKanjis(kanjis);
        } else {
            console.error(`Failed to delete kanji with _id = ${_id}, status code = ${response.status}`)
        }
    }


    // LOAD all the kanji
    useEffect(() => {
        loadKanji();
    }, []);


    // DISPLAY the kanji
    return (
        <>
            <div className="titles-div">
                <h2 className='title-kanji'>Kanji Go</h2>
                <h2 className='title-jlpt'>JLPT {jlpt}</h2>
            </div>
            
            <KanjiTable
                kanjis={kanjis} 
                onEdit={onEditKanji} 
                onDelete={onDeleteKanji} 
            />
        </>
    );

}

export default KanjiGoPage;