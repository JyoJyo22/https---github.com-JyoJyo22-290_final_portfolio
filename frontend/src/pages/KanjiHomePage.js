import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import KanjiTable from '../components/KanjiTable';
import { CgAddR } from "react-icons/cg"


function KanjiHomePage( {setKanji} ) {
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
        // console.log(_id, "THIS IS THE ID")
        // const response = await fetch(`/get/${_id}`, { method: 'GET' });
        // console.log(response)
        // const kanji = await response.json();
        // console.log(kanji)
        setKanjis(currKanji);
        redirect("/kanji-edit");
    }


    // DELETE a single kanji  
    const onDeleteKanji = async _id => {
        const response = await fetch(`/delete/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/get');
            const kanjis = await getResponse.json();
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
            <h2>List of Kanji</h2>
            <p>Paragraph about this page.</p>
            <span><CgAddR onClick={() => onCreateKanji()} title="create-icon" /></span>
            
            <KanjiTable
                kanjis={kanjis} 
                onEdit={onEditKanji} 
                onDelete={onDeleteKanji} 
            />
        </>
    );

}

export default KanjiHomePage;