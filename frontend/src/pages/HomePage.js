import React from "react"

function HomePage() {
    return(
        <>
            <h2>Web Development Concepts</h2>
            <article id="web-servers" className="main-text-section">
                <h3>About Web Servers</h3>
                <p>
                    Welcome to the web dev page page. An "index page" is the default name for the home page of a website, 
                    depending on which web server that page is hosted on. This is the first page that users will
                    interact with when they visit a website, it usually provides navigation to all other pages for
                    the user. This way, the user does not have to include a specific path/file in the URL. They
                    can simply use the domain name in the URL and the server will serve the user this index page
                    if there is one. I created this index page with an HTMl file in VS Code. The &lt;head&gt; section
                    of the HTML file contains meta-data about how this file should be interacted with via browsers, screen
                    readers, etc. and the &lt;body&gt; section of the HTML file contains the client-constructed HTML
                    content that will be displayed in the viewport of the browser. This is how users can interact with
                    the content in this index.html file and this is how its content is constructed and displayed.
                </p>
            </article>
        </>
    );
}


export default HomePage;