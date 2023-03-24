import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditKanjiPage = ({ toEditKanji }) => {
 
    const [kanji, setKanji]           = useState(toEditKanji.kanji);
    const [romaji, setRomaji]         = useState(toEditKanji.romaji);
    const [hint, setHint]             = useState(toEditKanji.hint);
    const [section, setSection]       = useState(toEditKanji.section);
    const [deadline, setDeadline]     = useState(toEditKanji.deadline.slice(0,10));
    
    const redirect = useNavigate();

    const editKanji = async () => {
        const response = await fetch(`/update/${toEditKanji._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                kanji: kanji, 
                romaji: romaji, 
                hint: hint,
                section: section,
                deadline: deadline
            }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.status === 200) {
            alert(`A Kanji has been successfully updated via the EditKanjiPage`);
        } else {
            const errMessage = await response.json();
            alert(`A Kanji has failed to update via the EditKanjiPage with status code: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/kanji");
    }

    return (
        <>
            <article>
                <h2>Edit Kanji</h2>
                <p className="kanji-list-p">Here you can edit a Kanji in the Kanji Collection in Mongo DB. This will change any values you decide to 
                    update in the database, this way your changes will persist across all of your Kanji studying. Your Kanji
                    can be updated at any time via the edit icon on the Kanji List page.
                </p>
                <form onSubmit={(e) => { e.preventDefault();}}>
                    <fieldset>
                        <legend>What do you want to update in this Kanji?</legend>
                        <label htmlFor="kanji">Kanji</label>
                        <input
                            type="text"
                            name="kanji"
                            placeholder="currently: {kanji}"
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

                        <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={editKanji}
                            id="submit"
                        >Edit Kanji</button>
                    </fieldset>
                </form>
            </article>
        </>
    );
}


export default EditKanjiPage;