import React from "react"

function WebDevPage() {
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
                <p>
                    When we look into the browser's web dev tools, we can view details on HTTP requests and responses. 
                    We can find our index.html page here and inspect it, and find that we can get a 200 response for 
                    this index.html page. This means that our web browser sent a GET request to the OSU Apache server
                    and that Apache server sent back a 200 response which means "I have found what you requested and I
                    am returning it to you." We get 404 responses for both the main.css and main.js pages. This means that
                    these pages were requested by the web browser but there is a client-side error causing these pages
                    to not be located.

                </p>
                <p>
                    Now that this file has been transferred to the ENGR server, we can observe differences in the web dev tools. 
                        Most notably, the file served by my local machine lists no server and the host is listed as 127.0.0.1:5500. 
                    I have come to learn that this 127.0.0.1 can be called a "loopback IP address" and it allows a network to send a
                    response to the same machine that delivered the request. The :5500 part is the port where my local machine is
                    hosting the web page.
                        The file served by the ENGR server lists the server in the HTTP response header as "Apache/2.4.6" which is the 
                    server that the OSU ENGR department uses. In the HTTP request header we can see the host listed as
                    "web.engr.oregonstate.edu."
                        Another difference can be observed by viewing the HTTP response body. The file served by the ENGR servers lists
                        the HTML file exactly as it appears in the index.html file. The file served by my local machine includes a script
                        that is injected by the Live Server extension that I am using in VS Code in order to serve the web page locally.

                </p>
                <p>
                    The favicon.ico file returns a 200 status code because this image is injected by the server, the request is sent to
                    https://web.engr.oregonstate.edu/favicon.ico and this page is properly located when one is on the ENGR server. 
                    The main.css and main.js however return 404 responses (client-side errors) because these pages are supposed to be
                    created by the client (me) but since these pages don't exist on the client-side then they can't be located via an 
                    HTTP request, so the server will not find them. These pages are referenced in the HTML file (via href) but they
                    were never created, thus they will return 404 until the client builds them.

                </p>
                <p>
                    This is the URL:       https://web.engr.oregonstate.edu/ ~houghtjo/assign1_houghtjo/.
                        The scheme in this case is https, which stands for "secured hypertext transfer protocol." This is the protocol
                    that the client uses to request resources from the server, and the "s" part means that this client-server 
                    communication is encrypted. 
                        The subdomain is web.engr, and this is used to access different sections/pages of the main domain. In this case
                    the ENGR subdomain is referring to the engineering "section/department" of the main oregonstate.edu domain. Thus
                    oregonstate.edu is the host domain, and it is called such because this is where the desired resource is being hosted.
                    This is where the client must send its request in order to find what it wants.
                        The desired resource(s) are in this URL as /~houghtjo/assign1_houghtjo/, and this specifies the path which
                        can represent the actual physical location of the resource on the server. It can also represent the path to 
                        a program which will serve the desired content.

                </p>
            </article>
            <article id="frontend-design" className="main-text-section">
                <h3>Frontend Design</h3>
                <p>
                    When we talk about frontend design we're simultaneously talking about user experience. In this sense, we can
                    imagine that many frontend developers are also UX designers, or would collaborate closely with UX designers. This
                    is to say that frontend developers must always keep in mind who their user is, what the user wants, what the user
                    might expect out of the given product, etc. There's a famous quote in the design world that goes:   "Always design
                    a thing by considering it in its next larger context - a chair in a room, a room in a house, a house in an environment,
                    an environment in a city plan." So when we design we're not just talking about visual appeal, but also usability and
                    context. 
                </p>
            
                <h5>The 5 E's of Usability</h5>
                <dl>
                    <dt>Effective</dt>
                    <dd>does the product actually allow users to accomplish their objectives?</dd>
                    <dt>Efficient</dt>
                    <dd>have we minimized the number of steps users need to take to navigate their objectives?</dd>
                    <dt>Easy to navigate</dt>
                    <dd>have we equipped the product with easy and understandable wayfinding? 
                        will users be able to easily remember where they can go to achieve their goals?
                    </dd>
                    <dt>Error-free</dt>
                    <dd>is the product fully accessible?
                        Can the product be adequately navigated without running into problems?
                    </dd>
                    <dt>Enjoyable</dt>
                    <dd>is the user experience such that users will want to return to this product?
                        what makes this product stand out to users amongst other products?
                    </dd>
                </dl>
                <h5>Page Layout Tags</h5>
                <p>
                    The purpose of page layout tags is to organize the web page and make sure that page flows nicely. This is our
                    way of separating the contents of a page into sections like headers, footers, main section, navigation section, etc.
                    This comes back to usability, if our content is not organized and readable then users won't come back. We can style 
                    and customize these sections further with CSS. We include &lt;header&gt; and &lt;footer&gt; tags at the top and
                    bottom of each page, these help give the user a sense of consistency. That is, users know they are following
                    along the same website whenever they navigate, and these tags also give off a sense of brand consistency. The
                    &lt;footer&gt; also usually contains copyright and legal information. We use a &lt;main&gt; tag to contain all of
                    the primary information on the page such as articles, paragraphs, figures, etc. This will go in between the header
                    and footer tags and will serve as the meat of the page. The &lt;section&gt; and &lt;article&gt; tags are commonly
                    used in tandem (within the &lt;main&gt; tag) to further group like-content together. This helps modularize the page
                    and also serves to organize information for users who use screen readers. We also can use a &lt;div&gt; tag to group
                    content that is of a dynamic nature. The &lt;div&gt; tag also serves as a wild card of sorts, we can use this tag
                    whenever no other will suffice to hold the given information.
                </p>
                <h5>Anchor Tags</h5>
                <p>
                    The anchor tags allow us to:  create links between different pages within our app, create links to specific
                    locations within a given page (we can use the "id" attribute for this, to bring the user to section "id"), 
                    and allow us to create links to external URLs. They do this via an "href" attribute which describes the location 
                    where the user will be taken once they click the link. 
                </p>
            </article>
            <article id="images-and-css" className="main-text-section">
                <h3>Images & CSS</h3>
                <h5>Optimizing Images</h5>
                    There are some key specifications that we can keep in mind whenever we want to optimize photos for the web:
                    <dl>
                        <dt> Descriptive File Names </dt>
                        <dd> We want to include as much information as we can in the file names of our photo files, this way,
                            search engine bots and screen readers can make better use of our photos.
                        </dd>
                        <dt>Small File Sizes</dt>
                        <dd>We want to make our photo file sizes as small as possible in order to minimize load times. One
                            of the ways we can do this is via image compression.
                        </dd>
                        
                        <dt>Make Dimensions Exact</dt>
                        <dd>We have a certain space that our image will be within in our web page, we can crop and decrease the
                            size of our image such that it fits this space more appropriately.
                        </dd>
                                
                        <dt>Correct File Format</dt>
                        <dd>Different types of photos have different file types that accommodate those photos. Logos and icons 
                            go best with .gif, line-art is best suited with .png, interactive and/or animated images are best
                            with .svg, low to high quality photos are more suited towards .jpg, and very high quality photos 
                            will be best with .webp
                        </dd>
                        <dt>Reducing the Resolution</dt>
                        <dd>We can adjust the resolution of our images depending on the monitor that will be displaying those
                            images. A lower-resolution monitor will perform better with lower-resolution images.
                        </dd>
                        <dt>Color Mode</dt>
                        <dd>We want to use the RGB color mode for .webp, .svg, .jpg, and .png files, but for .gif files
                            we want to use Indexed color mode.
                        </dd>
                    </dl>
                <h3>CSS</h3>
                <h5>Why CSS?</h5>
                <p>
                    CSS stands for "cascading style sheets" and the reason we incorporate them into our web pages is so 
                    that we can give our web pages a specific look, a specific style, and also so that we can make our
                    pages more usable, readable, and engaging. CSS is what allows a brand to have its own style and 
                    marketing characteristics on the web. If our web pages were only built with HTML, then they would
                    lack the qualities that make users want to return to our site, thus CSS is how we incorporate 
                    usability and how we make our product stand out.
                </p>
                <h5>Incorporating CSS</h5>
                    Here are key ways we can fold our CSS into our HTML documents: 
                    <dl>
                        <dt>Externally-linked CSS files &#40;preferred method&#41;</dt>
                        <dd>We can link our CSS file in the &lt;head&gt; block of an HTML file with a statement like
                            the following:  &lt;link rel="my_stylesheet" href="main.css" /&gt; and we can also import our 
                            CSS component files as in the following:    @import my_component.css 
                        </dd>
                        <dt>Style tags embedded in HTML</dt>
                        <dd>&lt;style&gt; h3 &#123;color: orange;&#125; &lt;/style&gt;</dd>  
                        <dt>Inline HTML styles</dt>
                        <dd>eg:    &lt;h3 style="color: orange" &gt;</dd>
                        <dt>Javascript Template Literals</dt>
                        <dd>eg:    const my_heading = styled.h2`  color : orange;  ';</dd>
                        <dt>Regular Javascript &#40;interaction with the DOM&#41;</dt>
                        <dd>eg:    document.getElementsByTagName&#40;'h3'&#41;
                            .style.color = 'blue';
                        </dd>
                    </dl>
                <h5>Page Layout Blocks</h5>
                <p>
                    It is important to specify page layout blocks in our HTML file not only so that the content of our page is 
                    organized, but also so that search engine bots and screen readers can navigate our page, thus aiding
                    usability. We then can use CSS to adjust the margins/borders/paddings around each of these layout blocks, as
                    well as add colors and any other styling we want.
                </p>
            </article>
            <article id="forms" className="main-text-section">
                <h3>Forms</h3>
                <h4>The Major Goals of Form Accessibility</h4>
                <p>
                    We need to put clear instructions both in the labels and above the form, this way screen readers are
                    able to tell what the sections of the form are for.
                    We also must let the users know why we need their input and which inputs are required.
                    We can set the first field in our form to autofocus so that users are immediately prompted and
                    they don't need to return to their mouse or trackpad to start filling out the form.
                    We should make sure that each form field can be completed with only a keyboard (no mouse nor trackpad),
                    this way users who don't use mouses can fill out the form. For example, an html &lt;Select&gt; form 
                    can be navigated using arrow keys and the enter key.
                    We can also apply tab indexing to our form to allow users to transfer from form field to form field without
                    leaving the keyboard. This also clarifies the order in which the form fields should be filled out.
                    Additionally, we need to ensure that validation messages are screen-readable, because not all browser 
                    messages are.
                </p>
                <h4>All About Form Controls</h4>
                <article className="form-controls">
                    <h5>The &lt;form&gt; tag</h5>
                    <p>
                    This is the tag that actually creates a form in html. We can populate a form tag with anything except
                    for another form tag. Mainly, we will fill our form tags with tags that take in user input (listed below).
                    The 2 major attributes of a form tag are the "action" and "method" attributes. The action attribute tells
                    where the form request will be sent to, and the method attribute describes which HTTP method will be used
                    to send the HTTP request that the forms sends when submitted.
                    </p>
                    <h5>The &lt;fieldset&gt; tag</h5>
                    <p>
                    This tag separates form fields into groups, thus making it easier for users with screen readers to 
                    decipher the different form fields.
                    </p>
                    <h5>The &lt;legend&gt; tag</h5>
                    <p>
                    This tag also helps separate form fields into groups, but it will also include prompts that give users
                    more understanding as to what a specific form group is for.
                    </p>
                    <h5>The &lt;label&gt; tag</h5>
                    <p>
                    This tag puts a label next to any kind of form field that involves user input, this way users can 
                    understand what that form control is for (this is especially helpful for users with screen readers).
                    We use a "for" attribute with these which points to the form field that the label applies to.
                    </p>
                    <h5>The &lt;input&gt; tag</h5>
                    <p>
                    This tag puts a label next to any kind of form field that involves user input, this way users can 
                    understand what that form control is for (this is especially helpful for users with screen readers).
                    We can use a "for" attribute with input tags to point to the form field that the label applies to.
                    We can also include a "required" attribute which requires users to fill out a form field before they
                    can submit the form. The "type" attribute will determine what type of input the particular form field
                    will be, this type can be an email type, a text type, radio type, checkbox type, and more. Important 
                    for any input field is also the "name" attribute, this is how the server maps a user response to its 
                    respective form field. In this way, the "name" attribute acts like a key, whereas the user input to 
                    that form field acts like the value to that key. The "pattern" attribute serves as a validator for 
                    user input, if the user does not match the pattern with their input, then form submission can be 
                    restricted until they do so.
                    </p>
                    <h5>The &lt;select&gt; tag</h5>
                    <p>
                    The select tag will give the user a drop-down menu of options to choose from, and each option is
                    represented with an &lt;option&gt; tag. The select tag will also make use of the "name" attribute,
                    and it can utilize many of the same attributes as the &lt;input&gt; tag.
                    </p>
                    <h5>The &lt;textarea&gt; tag</h5>
                    <p>
                    The textarea tag will present users with a empty text block that allows them to enter multiple lines 
                    of text. This is usually used for receiving feedback or comments from users as it doesn't restrict
                    users to given options or selections. The textarea tag will also make use of the "name" attribute,
                    and it can utilize many of the same attributes as the &lt;input&gt; tag.
                    </p>
                    <h5>The &lt;button&gt; tag</h5>
                    <p>
                    The button tag is usually used as a "submit" button so that users can submit the entire form. This
                    is what commits the "action" attribute that we saw in the &lt;form&gt; tag itself.
                    </p>
                </article>
                <h4>Styling our Forms</h4>
                    <p>
                        We can style our forms such that users can more easily interact with them. Since many users will be 
                        interacting with our app via phone, it is important to make any buttons anc click-ables large enough
                        to be touched with large fingers on a touch screen. With phones in mind, we also want to provide 
                        adequate spacing between our components in order to accommodate screen sizes both small and large. We 
                        can display our labels such that they are easily associated with their respective form controls. Increasing
                        the font size can also make our text more legible, while maintaining a consistent font family can help
                        our form adhere to brand recognition. We can also style "required" fields differently from the rest of
                        the form so it is obvious to users which fields are required to fill out and which are not. We can also 
                        include "hover" and "focus" properties so that users can be easily aware of which form field they are
                        interacting with. Properties like "valid" and "invalid" can also be useful in that they can provide
                        style changes that allow users to know if they have correctly filled out a field or not. Additionally, 
                        we can add in "enabled" and "disabled" attributes in order to restrict access to certain elements in the
                        form that should only be accessible until the user has completed a prerequisite form control. These are
                        just a taste of all of the ways that web designers can improve the usability of their web forms.
                    </p>
            </article>
            <article id="node" className="main-text-section">
                <h3>Node, npm, & Express</h3>
                <article className="node-npm-express">
                    <h5>Node</h5>
                    Node is a Javascript environment which can run Javascript outside of a browser. Before Node.js, 
                    Javascript was only used as a client-side language for building web pages and making them 
                    interactive. At this point Javascript was not able to directly interact with the servers, file
                    systems, databases, nor networks which javascript was sending requests to from the front end. Node
                    is what allowed Javascript to not only directly interact with these back end components, but also
                    developers can now create web servers and web API's in Javascript. So instead of just sending requests 
                    from the front end, Javascript can now also handle those requests and deliver responses from the back end. 
                    This improves the development cycle for web designers since now they are able to build both the client side 
                    and server side of their application with one core language. Node.js thus comes with a large set of libraries
                    and modules that can be installed in order to accomplish many back end tasks. While we'll see that we can
                    use other .js frameworks to set up Javascript API's, it is Node.js that would be used to perform server-side 
                    logic and actually query databases.
                    <h5>npm</h5>
                    The acronym "npm" stands for "Node Package Manager" and it is the main package handler for Node. 
                    Whenever our web project requires some outside package, we can install that package via npm. Npm
                    allows developers to install these packages from the command line and once installed npm will 
                    automatically inject that package into the project directory, usually in a folder named "node 
                    modules" along with all of the other installed packages. In fact, developers will usually start
                    their project with a large list of packages since npm will also install any dependencies that 
                    our installed packages require. Npm will also manage any updates or version changes involved 
                    with the packages we are using. When we run "npm init" in the terminal, npm will inject a package.json 
                    file that will initiate a Node.js project. This package.json file is where we can find a list of the 
                    packages that we have installed in our project. On top of that, the package.json file will also define 
                    our project along with a name and description. From the terminal, we can run "npm start" in order to 
                    start our Node application, this "start" command refers back to file defined the package.json project
                    definition. Without npm, web developers would have a much more difficult time keeping track of all the
                    packages they need as well as maintaining changes amongst those packages.
                    <h5>Express</h5>
                    Express.js is a framework built on top of Node which makes developing API's and web applications
                    easier with Node. While Node was equipped with basic APIs, Express added on many more extensions 
                    for easier development such as routing and 'middleware' APIs. Thus while Node is our web server for our 
                    back end javascript application, Express is the middleman between this server and our client side javascript, 
                    thus it handles HTTP requests and responses between the front end and the back end. Express features an "app" 
                    API that both 'listens' for incoming HTTP requests from the front end javascript and also sends HTTP responses 
                    from the back end Node server. A developer can then make a call such as "app.get" and Express will take this 
                    HTTP GET request, along with whatever URL path the developer provided, and it will perform the necessary routing
                    (with a "req" object) such that it can "get" something from that given database. Express then uses its "res" object
                    to hold the HTTP response and it can send this response back to the client. It is worth noting that Node is able
                    to perform this whole process without Express, but Express was introduced to make this whole process simpler and 
                    more readable for the developer. The middleware APIs of Express also add more functionality to this request-response
                    exchange such as:  error-handling, authentication, and logging. 
                </article>
            </article>
            <article id="js" className="main-text-section">
                <h3>Javascript</h3>
                <article className="node-npm-express">
                    <h5>Main Data Types</h5>
                    Javascript (JS) contains 6 main data types:   numbers, Boolean values, strings, symbols, null/undefined types, 
                    and objects. Numbers in JS are double-precision floating-point numbers in memory, and Boolean values
                    simply evaluate to either True or False. JS strings can be enclosed in either double or single quotes and
                    can also be single characters. In JS we can also use "Template Literals" which are strings that have other JS
                    expressions embedded within them. We can include many other forms of JS inside these expressions, such as
                    JS objects, function calls, variables, HTML, etc. and after evaluating these expressions, JS will convert 
                    the value into a string and include it with the other string data. In order to indicate an absence of a 
                    value, JS will still return "null" or "undefined" instead of doing nothing. A JS object is a 
                    set of name:value pairs, and after we initialize our object, we can perform create, read, update, and 
                    delete operations on that object. The names of the pairs are strings, and the values can be any data type.
                </article>
                <article className="node-npm-express">
                    <h5>Objects, Arrays, JSON</h5>
                    Javascript (JS) objects are our main tool for structuring our data in JS, they serve as our main scaffold
                    for our program. For example, one can make a tree object, and they then assign various names or "properties"
                    to that tree object, and each of these properties has a value. Thus one can give their tree a "leaf" name 
                    which has the value "maple" for maple leaves, or it can have a value like 200, so the tree now has 200
                    leaves, the options for object construction are limitless. We can also assign functions as values, thus
                    giving our tree object dynamic functionality instead of just static qualities. An array is another type of
                    JS object which is itself a collection of other data types, including objects, and even other arrays. We
                    can thus make many different types of our tree object, and then we can place all of them in a "forest" array.
                    Now we have a collection of trees, and all of these can be manipulated simultaneously (via a loop) with 
                    JS's built-in array methods. So our objects can all "own" their own methods, and now on top of that we have a 
                    a way of grouping all of them together such that we can interact with all of them as a group. JSON or "Javascript
                    Object Notation" can be described as an "intermediate object" that acts between different programming languages. 
                    We can use JSON to convert an object in one programming language to an object in another programming language, 
                    and this transform occurs via an intermediary JSON string. Most programming languages will now come with 
                    libraries that feature JSON support, thus they will each have their own ability to convert their objects into
                    JSON strings and to convert JSON strings into their type of objects. JSON is thus used on the frontend to 
                    transmit data between, say, a web application and the web server, it has become the most popular language
                    with which to transmit data between applications. 
                </article>
                <article className="node-npm-express">
                    <h5>Conditionals & Loops</h5>
                    Javascript (JS) makes use of conditional statements which can control or redirect the flow of a program based on 
                    the condition. Thus our application can then make decisions based on whether or not a certain case has
                    happened or not. In JS we can use the statements "if," "else," and "else if" in order to branch our control
                    flow into different directions, or to respond to user input in a certain way. JS also features a "switch" 
                    statement which is a conditional statement that can respond with many different conditions depending on
                    the state of a single variable or "case." JS also features 5 different loop statements which can iterate
                    over a collection of values or for a certain number of specified times. The "while" and "do while" loops 
                    will execute only while a certain specified condition is true, with the only difference being that the "do
                    while" loop will execute the loop statement, then check if the condition for the loop is still true, and the
                    "while" loop will check the condition before it executes the loop statement at all. We can also use the "for"
                    loop to iterate for a certain number of times when we already know how many times we need to loop over our
                    statement. JS also features a "for of" loop for iterating over the elements of a pre-existing string or
                    array, and we also can utilize the "for in" loop to iterate over the properties of a pre-existing object.
                    Additionally, any time we need to break out of the loop, we can include a "break" statement, or anytime we
                    would like our loop to skip to the next loop iteration (without executing any remaining code), we can put 
                    in a "continue" statement.
                </article>
                <article className="node-npm-express">
                    <h5>Object-Oriented Programming</h5>
                    We can consider Javascript (JS) to be an object-oriented programming (OOP) language in the sense that it features
                    objects which have their own identity, state, and behavior. An object has its own identity in the sense that it
                    has its own properties (or "names") and each of these have their own values. The object has state in the sense
                    that those values can change as the object "interacts" within the program or with the user. An object can also
                    have behavior in the sense that it can contain functions which operate on data or input from the rest of the
                    application. Thus, we don't just create a variable called "tree," but rather we can create a "tree" object that
                    contains many different properties and functions, and this "tree" can change depending on the flow of the program.
                    Modern JS makes object construction more organized via "classes." We can thus create Classes, and these Classes
                    will act like object generators from which we can instantiate as many objects of that Class as we need. So we
                    can now have a "tree" Class, from which we can create many trees, all of which will have the features that the
                    tree Class has, along with any other properties that the individual trees themselves wish to add in. So with OOP
                    we can now view our program or application as its own world of objects, each of which can interact each other
                    and change the flow of the program with their own behavior. 
                </article>
                <article className="node-npm-express">
                    <h5>Functional Programming</h5>
                    Functional Programming (FP) is yet another feature that can be utilized in JS and it usually is contrasted
                    with OOP as a separate programming "paradigm" or methodology. Instead of the main focus being on objects, 
                    with FP the focus is on functions, functions which are not "owned" by any object and are in fact "stateless."
                    Thus instead of the state-changes which are a key component of OOP, in FP "immutability" will be an important
                    tenet. That is, functions in FP will receive inputs and deliver outputs, ans this is how data will be manipulated
                    in FP. Whereas in OOP, those functions would be owned by the object and be tied to some change of state of that 
                    object. But FP does not prioritize objects, and thus it is functions that will be called the "first class" values
                    in FP. And since functions are the primary players in FP, they can be assigned to variables, they can receive 
                    other functions as parameters, and they can return other functions. In JS, we can utilize both OOP and FP in
                    order to both construct objects and classes, and also to make use of "higher-order" functions such as "map" and
                    "filter."
                </article>
            </article>
            <article id="dom" className="main-text-section">
                <h3>DOM</h3>
                After the server sends its HTML, CSS, and JavaScript documents to the browser, that browser will construct a 
                Document Object Model or "DOM" as it's called. And this DOM is presented by a web API provided by the browser. So now 
                that the server has sent all required materials needed to construct the given page over to the browser, the browser 
                then parses the HTML in order to build the DOM. This DOM is built as a tree-like structure in which each node 
                corresponds to an element in the HMTL document. Afterwards, the browser can then utilize this tree to apply the CSS 
                styles to their respective HTML elements. The browser can simply traverse the DOM tree in order to find which CSS 
                selectors apply to which tree nodes (the HTML elements). So where do JavaScript and Express enter into this DOM
                picture? Well the DOM API provides a set of objects, methods, and properties that allow JavaScript code to access
                and manipulate the nodes (the HTML elements) and properties (CSS styles and methods) of the DOM tree. So the DOM
                API provides many different types of objects, for example, the web developer can access the "document" object 
                which is actually the root of the DOM tree, and this "document" object will thus act as a global object with regards
                to interaction with that web page. We can thus access the entire "document" if we like, or we can access nodes
                further down in the DOM tree such as all &lt;paragraph&gt; tags, or a single &lt;paragraph&gt; element via its ID, or
                a form via its class name. And the DOM API provides us with methods to do just this, we can use statements like
                "document.getElementsByTagName('p')" or "document.getElementById('my-paragraph')" to access the element that we want to
                manipulate via JavaScript. In that same JavaScript code, we can also write a line such as "document.addEventListener" 
                and these "Event Listeners" will be waiting for user-initiated "Events" which the JavaScript code will then respond to
                based upon some developer-customized response. These "Events" can be anything from a page load, to a scroll, to a click,
                to a form submission - however we want to act on the page. And this is where Express.js comes into the picture, we can
                also link up elements in our HTML with user Events that can send requests to our Express server. In these Events we can
                obtain various information from the DOM, including DOM elements or objects (and their methods or values), and pass this
                information in the request to Express. The Express server can then be coded to deliver an Event-specific response back 
                to the client-side JavaScript, and this browser-side JavaScript can use the information in the server response to act
                on the web page and make it dynamic. Web developers are thus able to update the DOM of a web page from both client-side
                JavaScript and from server-side JavaScript via Express.
            </article>
        </>
    );
}


export default WebDevPage;

    