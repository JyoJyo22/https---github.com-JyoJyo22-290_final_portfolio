import React from "react";
import { TiDelete, TiEdit } from "react-icons/ti";


function KanjiRow( {currKanji, onDelete, onEdit} ) {

    return(
        <tr>
            <td><TiDelete onClick={() => onDelete(currKanji._id)} className="delete-kanji-icon" title="delete-kanji" /></td>
            <td><TiEdit onClick={() => onEdit(currKanji)} className="edit-kanji-icon" title="edit-kanji" /></td>

            <td title="Kanji">{currKanji.kanji}</td>
            <td title="Romaji">{currKanji.romaji}</td>
            <td title="Hint">{currKanji.hint}</td>
            <td title="Section">{currKanji.section}</td>
            <td title="Deadline">{currKanji.deadline.slice(0,10)}</td>
        </tr>
    )
}

export default KanjiRow;