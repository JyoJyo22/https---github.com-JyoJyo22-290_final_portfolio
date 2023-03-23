import React from "react"

function HomePage() {
    return(
        <>
            <h2>MERN Stack Website</h2>
            <article id="mern-stack" className="main-text-section">
                <p>
                    This portfolio site has been created via a MERN stack. This means that the following Javascript-coupled 
                    languages have contributed to its construction, layout, and design:  MongoDB, Express, React, and Node. 
                    The database for this site is being maintained by MongoDB Atlas. MongoDB is known as a Document-oriented 
                    database management system in which data is stored as JSON "documents." Documents that are similar will be
                    added to a "Collection" in order to organize data. 
                </p>
            </article>
        </>
    );
}


export default HomePage;