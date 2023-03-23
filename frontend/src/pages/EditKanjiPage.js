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
        redirect("/");
    }

    return (
        <>
            <article>
                <h2>Edit a Kanji in the Kanji Collection in Mongo DB</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault();}}>
                    <fieldset>
                        <legend>Which Kanji do you want to update?</legend>
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
                            onClick={editKanji}
                            id="submit"
                        >Save</button> to the Kanji Collection</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}


export default EditKanjiPage;