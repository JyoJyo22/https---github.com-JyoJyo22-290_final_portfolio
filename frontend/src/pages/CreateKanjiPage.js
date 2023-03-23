import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreateKanjiPage = () => {

    const [kanji, setKanji]           = useState('');
    const [romaji, setRomaji]         = useState('');
    const [hint, setHint]             = useState('');
    const [section, setSection]       = useState('');
    const [deadline, setDeadline]     = useState('');
    
    const redirect = useNavigate();

    const addKanji = async () => {
        const newKanji = { kanji, romaji, hint, section, deadline };
        console.log(newKanji);
        console.log("ADD KANJI in CreateKanjiPage");
        const response = await fetch('/create', {
            method: 'POST',
            body: JSON.stringify(newKanji),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        if(response.status === 201){
            alert(`A new Kanji has been successfully created via the CreateKanjiPage`);
            redirect("/");
        } else {
            alert(`A new Kanji has failed to create via the CreateKanjiPage with status code: ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a new Kanji to the Kanji Collection in Mongo DB</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Kanji do you want to add?</legend>
                    <label htmlFor="kanji">Kanji</label>
                    <input
                        type="text"
                        name="kanji"
                        placeholder="New Kanji"
                        value={kanji}
                        onChange={e => setKanji(e.target.value)} 
                        id="newKanji" />
                    
                    <label htmlFor="romaji">Romaji</label>
                    <input
                        type="text"
                        name="romaji"
                        value={romaji}
                        placeholder="New Romaji"
                        onChange={e => setRomaji(e.target.value)} 
                        id="newRomaji" />

                    <label htmlFor="hint">Hint</label>
                    <input
                        type="text"
                        name="hint"
                        placeholder="Hint for the Kanji"
                        value={hint}
                        onChange={e => setHint(e.target.value)} 
                        id="newHint" />

                    <label htmlFor="section">Kanji JLPT Section</label>
                    <input
                        type="number"
                        name="section"
                        value={section}
                        placeholder="JLPT Section"
                        onChange={e => setSection(e.target.value)} 
                        id="newSection" />

                    <label htmlFor="deadline">Study Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={deadline}
                        placeholder="MM-DD-YY"
                        onChange={e => setDeadline(e.target.value)} 
                        pattern="\d{2}-\d{2}-\d{2}"
                        id="newDeadline" />

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addKanji}
                        id="submit"
                    >Add</button> to the Kanji Collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateKanjiPage;