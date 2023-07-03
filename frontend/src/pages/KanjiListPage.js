import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import KanjiTable from '../components/KanjiTable';
import { CgAddR } from "react-icons/cg"


function KanjiListPage( {jlpt, setJlpt, setKanji, kanjis, setKanjis} ) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // // RETRIEVE the entire list of kanji
    // const loadKanji = async (jlpt) => {
    //     const response = await fetch(`/get/${jlpt}`, { method: 'GET' });         // JLPT param turns into a string here
    //     const newKanjis = await response.json();
    //     setKanjis(newKanjis);
    // } 


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
        const response = await fetch(`/delete/${_id}/${jlpt}`, { method: 'DELETE' });
        if (response.status === 204) {
            // const getResponse = await fetch('/get');
            // const kanjis = await getResponse.json();    // change duplicate var name here
            // setKanjis(kanjis);


            // the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
            const response = await fetch(`/get/${jlpt}`, { method: 'GET' });      // JLPT param turns into a string here
            const newKanjis = await response.json();
            setKanjis(newKanjis);
        } else {
            console.error(`Failed to delete kanji with _id = ${_id}, status code = ${response.status}`)
        }
    }


    // useEffect(() => {
    //     // const str_jlpt = jlpt.toString();
    //     // loadKanji(jlpt);
    // }, [kanjis]);

    // DISPLAY the kanji
    return (
        <>
            <div className="titles-div">
                <h2 className='title-kanji'>Kanji List</h2>
                <h2 className='title-jlpt'>JLPT {jlpt}</h2>
            </div>
            <p className="kanji-list-p">Your current Kanji list. Each Kanji comes with its written Japanese form, 
                romaji form, a hint word for memorizing that Kanji, and the JLPT section that the Kanji is required for.
            </p>
            <button className="add-kanji-button" onClick={() => onCreateKanji()}>Add Kanji</button>
                {/* <CgAddR onClick={() => onCreateKanji()} className="add-kanji-icon" title="create-kanji" /> */}
                {/* <p className="add-kanji-p">Add Kanji</p> */}
            {/* </button> */}
            
            <KanjiTable
                kanjis={kanjis} 
                onEdit={onEditKanji} 
                onDelete={onDeleteKanji} 
            />
        </>
    );

}

export default KanjiListPage;