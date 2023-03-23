import React from 'react';
import KanjiRow from './KanjiRow';

function KanjiTable({ kanjis, onDelete, onEdit }) {
    return (
        <table id="kanjiTable">
            <caption>Add and Edit Kanji</caption>
            <thead>
                <tr>
                    <th>Kanji</th>
                    <th>Romaji</th>
                    <th>Hint</th>
                    <th>Section</th>
                    <th>Deadline</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {kanjis.map((kanji, index) => 
                    <KanjiRow
                        currKanji={kanji} 
                        onDelete={onDelete}
                        onEdit={onEdit} 
                        key={index}
                    />)}
            </tbody>
        </table>
    );
}


export default KanjiTable;