import React from 'react'
import './Project.css'

function Contact() {
    return (
        <main>
            <div className="container-project">
                <h1 className="name">Get in Touch</h1>
                <form name="contact personal" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact personal" />
                    <p>
                        <label htmlFor="name">Your Name: </label>
                        <input type="text" name="name"/>
                    </p>
                    <p>
                        <label htmlFor="email">Your Email: </label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label htmlFor="message">Message: </label>
                        <textarea name="message"></textarea>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </main> 
    )
}

export default Contact
