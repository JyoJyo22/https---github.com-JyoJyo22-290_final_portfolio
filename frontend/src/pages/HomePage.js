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
                        You can also make use of OpenAI's Dall-E program by searching for a picture to match up with your 
                        kanji. Then you can take screenshots of your Kanji-picture pairs and save them in the Kanji Pics tab
                    </li>
                    <li>
                        Feel free to leave feeback for the site via the Contact tab
                    </li>
                </ul>
            </article>
        </>
    );
}


export default HomePage;