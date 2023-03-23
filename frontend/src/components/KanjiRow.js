import React from "react";
import { TiDelete, TiEdit } from "react-icons/ti";


function KanjiRow( {currKanji, onDelete, onEdit} ) {
    console.log(currKanji)
    console.log("currKANJI")

    return(
        <tr className="testy">
            <td><TiDelete onClick={() => onDelete(currKanji._id)} title="delete-icon" /></td>
            <td><TiEdit onClick={() => onEdit(currKanji)} title="edit-icon" /></td>

            <td title="Kanji">{currKanji.kanji}</td>
            <td title="Romaji">{currKanji.romaji}</td>
            <td title="Hint">{currKanji.hint}</td>
            <td title="Section">{currKanji.section}</td>
            <td title="Deadline">{currKanji.deadline.slice(0,10)}</td>
        </tr>
    )
}

export default KanjiRow;