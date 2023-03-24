import React from "react"

function HomePage() {
    return(
        <>
            <h2>MERN Stack Website</h2>
            <article id="mern-stack" className="main-text-section">
                <ul>
                    <li>
                        This portfolio site has been created via a MERN stack. This means that the following Javascript-coupled 
                        languages have contributed to its construction, layout, and design:  MongoDB, Express, React, and Node. 
                        The database for this site is being maintained by MongoDB Atlas. 
                    </li>
                    <li>
                            MongoDB is known as a Document-oriented database management system (DBMS) in which data is stored as 
                        JSON "documents." Documents that are similar will be added to the same "Collection" in order to 
                        organize data. And this database management is how we can make the State in our app persist across
                        separate running instances of the app running on different servers. So this Mongo DBMS allows for 
                        concurrent execution of CRUD operations from multiple different users. 
                    </li>
                    <li>
                            Now what is CRUD? This acronym stands for "create, retrieve, update, delete" and it is part of a web 
                        design philosophy known as "REST." REST stands for "Representational State Transfer" and it is a 
                        protocol that allows for easy and convenient interaction with our web APIs. It adheres to the following
                        commands in order to execute the respective CRUD operations seen above:   POST, GET, PUT, DELETE. This 
                        way, the handlers for different apps can be recognizable and easily read as long as they stick to the REST
                        design. REST also requires that the server be "State-less" and that route handlers receive their route 
                        parameters from the URL. 
                    </li>
                    <li>
                            Now how does this app interact with the data in MongoDB? Enter Mongoose. This is a Javascript library 
                        that slides in between Node.js and MongoDB in order to provide easy interaction between the two. Mongoose 
                        is known as a "document object mapper," and so it maps objects in Javascript code to documents stored in 
                        MongoDB.
                    </li>
                    <li>
                            Mongoose is part of the "Model" layer of this app. And this is just one of three layers that apps are
                        typically decomposed into:   Model, View, and Controller layers, or "MVC." The Model layer is what 
                        manages the app's data. So for this app, the Model layer is made up of Mongoose interacting with MongoDB.
                        The View layer is what actually displays the app to the users. So for this app, the View layer is made up 
                        of HTML, CSS, and all of the client-side React components that make the app interactive. The Controller 
                        layer is then the layer that connects these Model and View layers. The Controller layer is thus made up of 
                        Middleware APIs and route handlers that handle and process HTTP requests between the client-side and the 
                        server-side code. In this app, the Controller layer is comprised of Express.js, which is a framework built 
                        on top of Node. With all of these languages incorporated in, this app operates on Javascript from the 
                        front all the way to the database, thus completing the MERN stack. 
                    </li>
                    <li>
                            Other minor technologies have also been incorporated into this site. The fonts that you are reading 
                        have been imported from Google Fonts to match the theme of this site. React Icons have been included
                        in order to create user-friendly buttons like the ones you will find in the data (Kanji) list page. 
                        Additionally, the images in this app have been optimized via online image compression and conversion, 
                        thus making page loading a smoother experience. 
                    </li>
                </ul>
            </article>
        </>
    );
}


export default HomePage;