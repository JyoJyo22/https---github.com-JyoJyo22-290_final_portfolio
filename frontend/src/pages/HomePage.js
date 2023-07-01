import React from "react"

function HomePage() {
    return(
        <>
            <h2>About the Site</h2>
            <article id="mern-stack" className="main-text-section">
                <ul>
                    <li>
                        The purpose of this site is simple:  help Japanese learners memorize their Kanji!
                    </li>
                    <li>
                        Select the Kanji Go tab to begin memorizing Kanji based on JLPT section
                    </li>
                    <li>
                        You can also add Kanji to your personal Kanji List which is also organized by JLPT section and will 
                        list your Kanji alphabetically &#40;alphabetical by romaji&#41;
                    </li>
                    <li>
                        You can also take screenshots of your Kanji picture creations and save them in the Gallery tab
                    </li>
                    <li>
                        Feel free to leave feeback for the site creator via the Contact tab
                    </li>
                </ul>
            </article>
        </>
    );
}


export default HomePage;