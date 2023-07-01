import React, {useEffect} from "react";

function KanjiFooter( { kanji, setKanji, kanjis })  {

    useEffect(() => {
        setKanji(kanji);
    }, [kanji]);

    return(
        <footer>
            <table className="kanji-footer-table">
                <thead>
                </thead>
                <tbody>
                    {kanjis.map((kanji, index) => 
                        <tr>
                            <td className="kanji-footer-cell" 
                                title="Kanji-Romaji" 
                                value={kanji} 
                                onClick={e => setKanji(e.target.value)} 
                                key={index}
                                >
                                {kanji.kanji} ~ {kanji.romaji}
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </footer>
    );

}

export default KanjiFooter;