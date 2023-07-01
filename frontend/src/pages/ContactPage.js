import React, { useState } from "react"


function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [radio, setRadio] = useState();
    const [checkbox, setCheckbox] = useState();
    const [select, setSelect] = useState();
    const [textArea, setTextArea] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const userInput = {
            name: name,
            email: email,
            radio: radio,
            checkbox: checkbox,
            select: select,
            textArea: textArea,
        };

        fetch('/contactForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: userInput
        })
            .then(response => response.json())
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error(error);
            alert("Failed to receive user Contact input")
            });
    };

    return (
        <>
            <h2>Contact Form</h2>
            <p className="kanji-list-p">
                This is an online Form that you can fill out to leave feedback for this website. Please fill in your
                information with any additional comments you'd like to make. Fields outlined in red are required for
                submitting the form.
            </p>

            <article>
                <form>
                    <fieldset>
                        <legend>
                            Name Input
                        </legend>
                            <label htmlFor="nameField">Please provide your name:</label>
                            <input 
                                type="text" 
                                id="nameField"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                name="nameField"
                                className="required"
                                placeholder="firstname lastname" 
                                minLength="3"
                                maxLength="100"
                                tabIndex="1"
                                autoFocus
                                required
                            />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Email Input
                        </legend>
                        <label htmlFor="emailField">Please provide your email:</label>
                        <input 
                            type="email" 
                            id="emailField"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="emailField"
                            className="required"
                            placeholder="my_email@mail.com" 
                            minLength="3"
                            maxLength="100"
                            tabIndex="2"
                            pattern="[^ @]+@[^ @]+.[a-z]+"
                            required
                        />
                    </fieldset>
                    <fieldset className="radio-field">
                        <legend className="radio-checkbox-legend">
                            What's the most difficult part about learning Japanese?
                        </legend>
                        <article className="radio-article">
                            <label htmlFor="radioKanjiField" className="radio-label">Kanji</label>
                            <input 
                                type="radio"
                                id="radioKanjiField"
                                value={radio}
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3"          
                            />
                        </article>  
                        <article className="radio-article">
                            <label htmlFor="radioGrammarField" className="radio-label">Grammar</label>     
                            <input
                                type="radio" 
                                id="radioGrammarField"
                                value={radio}
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                        <article className="radio-article">
                            <label htmlFor="radioListeningField" className="radio-label">Listening</label>
                            <input
                                type="radio" 
                                id="radioListeningField"
                                value={radio}
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                        <article className="radio-article">
                            <label htmlFor="radioSpeakingField" className="radio-label">Speaking</label>
                            <input
                                type="radio" 
                                id="radioSpeakingField"
                                value={radio}
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                    </fieldset>
                    <fieldset className="checkbox-field">
                        <legend className="radio-checkbox-legend">
                            What methods for learning Japanese have been useful to you?
                        </legend>
                            <article className="checkbox-article">
                            <label htmlFor="checkboxReadingField" className="check-label">Reading</label>
                            <input 
                                id="checkboxReadingField"
                                type="checkbox" 
                                value={checkbox}
                                onChange={e => setCheckbox(e.target.value)}
                                name="checkboxField"
                                tabIndex="4"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxAnimeField" className="check-label">Anime</label>
                            <input 
                                id="checkboxAnimeField"
                                type="checkbox" 
                                value={checkbox}
                                onChange={e => setCheckbox(e.target.value)}
                                name="checkboxField" 
                                tabIndex="5"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxExchangeField" className="check-label">Language Exchange</label>
                            <input 
                                id="checkboxExchangeField"
                                type="checkbox" 
                                value={checkbox}
                                onChange={e => setCheckbox(e.target.value)}
                                name="checkboxField" 
                                tabIndex="6"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxAppsField" className="check-label">Apps</label>
                            <input 
                                id="checkboxAppsField"
                                type="checkbox" 
                                value={checkbox}
                                onChange={e => setCheckbox(e.target.value)}
                                name="checkboxField" 
                                tabIndex="7"
                            />
                        </article>
                    </fieldset>
                    <fieldset>
                        <legend>
                            How was your experience on this site?
                        </legend>
                        <label htmlFor="selectField">Did you find this site helpful?</label>
                        <select 
                            name="selectField" 
                            id="selectField" 
                            value={select}
                            onChange={e => setSelect(e.target.value)} 
                            tabIndex="8"
                            >
                            <option value="Yes, I find this site helpful">Yes</option>
                            <option value="No, I don't find this site helpful">No</option>
                            <option value="I find this site somewhat helpful">Somewhat</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Additional Feedback
                        </legend>
                            <label htmlFor="textareaField">Please provide any additional feedback here:</label>
                            <textarea 
                                id="textareaField"
                                name="textareaField"
                                value={textArea}
                                onChange={e => setTextArea(e.target.value)}
                                placeholder="enter your comments"
                                className="required"
                                minLength="3"
                                maxLength="100"
                                tabIndex="9"
                                required
                            ></textarea>
                        <button 
                            onClick={e => {
                                submitHandler(e)
                                }}
                            >Submit
                        </button>
                    </fieldset>
                </form>
            </article>

        </>
    );
}


export default ContactPage;