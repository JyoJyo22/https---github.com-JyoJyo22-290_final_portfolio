import React, {useEffect} from "react";

function KanjiFooter( { kanji, setKanji, kanjis, setRoman, setHinted, setImageURL })  {

    const handleClick = (kanjiString) => {
        const clickedKanji = JSON.parse(kanjiString);
        setKanji(clickedKanji);
        setRoman(false);
        setHinted(false);
        setImageURL("default URL");
    }

    // useEffect(() => {
    //     // setKanji(kanji);
    //     console.log("here's KANJI: ", kanji)
    // }, [kanji]);

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
                                id={JSON.stringify(kanji)}
                                // onClick={e => setKanji(e.target.value)} 
                                onClick={e => handleClick(e.target.id)}
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