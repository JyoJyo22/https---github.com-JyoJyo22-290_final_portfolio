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
            <h2>Kanji List</h2>
            <p className="kanji-list-p">Find the table of currently loaded Kanji here. Each Kanji comes with its written Japanese form, 
                romaji form, a hint for memorizing that Kanji, and the JLPT section that the Kanji is required for. 
                You can also set a study deadline for yourself for each Kanji. Use the buttons below to add a new Kanji, edit
                a previous Kanji entry, or delete an entry.
            </p>
            <button className="add-kanji-button">
                <CgAddR onClick={() => onCreateKanji()} className="add-kanji-icon" title="create-kanji" />
                <p className="add-kanji-p">Add Kanji</p>
            </button>
            
            <KanjiTable
                kanjis={kanjis} 
                onEdit={onEditKanji} 
                onDelete={onDeleteKanji} 
            />
        </>
    );

}

export default KanjiHomePage;