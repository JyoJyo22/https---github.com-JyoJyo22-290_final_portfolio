import express from 'express';
import 'dotenv/config';
import fetch from 'node-fetch'; 
import asyncHandler from 'express-async-handler';
import './products.js';
import NodeMailer from 'nodemailer';

'use strict';
const nodemailer = NodeMailer;
const app = express();
const PORT = process.env.PORT 

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));


let htmlTop = `
    <section className="header-nav">
        <header className="header-name">
            <h2 className="name-en">CONFIRMATION</h2>
            <h3 className="name-ja" lang="ja">コンフルメーション</h3>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="gallery.html">Projects</a>
            <a href="order.html">Products</a>
            <a href="staff.html">Staff</a>
        </nav>
    </section>
`

let htmlBottom = `
    <footer>
        <p className="footer-p">
            &copy; JOSEPH HOUGHTON 2023
        </p>
    </footer>
`   


app.post("/contactForm", (req, res) => {
    const userInput = req.body.userInput;
    console.log(req.body);

    let contact_res =  `
        ${htmlTop}
            <h2> Here's Your Form Response: </h2>
            <section class="response-section">
                <article class="response-article">
                    Your Name: <span class="single-response"> ${userInput.name} </span>
                </article>
                <article class="response-article">
                    Your Email: <span class="single-response"> ${userInput.email} </span>
                </article>
                <article class="response-article">
                    What I find most difficult about learning Japanese: <span class="single-response"> ${userInput.radio} </span>
                </article>
                <article class="response-article">
                    The Japanese methods that have been useful for me: <span class="single-response"> ${userInput.checkbox} </span>
                </article>
                <article class="response-article">
                    I found this site useful: <span class="single-response"> ${userInput.select} </span>
                </article>
                <article class="response-article">
                    My comments: <span class="single-response"> ${userInput.textArea} </span>
                </article>
            </section>
        ${htmlBottom}
    `  


    res.send(contact_res);
    


    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        // Message object
        let message = {
            from: 'Joseph Houghton <houghtjo@oregonstate.edu>',
            to: 'Joseph Houghton <houghtjo@oregonstate.edu>',
            subject: 'Nodemailer Test',
            html: contact_res
        };

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });

});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});