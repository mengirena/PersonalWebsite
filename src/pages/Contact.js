import React from 'react'
import './Project.css'
import './Contact.css'

function Contact() {
    return (
        <main>
            <div className="container-project">
                <h1 className="name">Get in Touch</h1>
                <section>
                    <div className="left-form">
                        <h3 className="role">Drop me a line...</h3>
                        <form name="contact personal" method="post" data-netlify="true" onSubmit="submit">
                            <input type="hidden" name="form-name" value="contact personal" />
                            <div className="form-fill">
                                <label htmKlFor="name">
                                <input type="text" name="name" placeholder="Your Name"/></label>
                                <label htmlFor="email">
                                <input type="email" name="email" placeholder="Your Email"/></label>
                                <label htmlFor="message">
                                <textarea name="message" placeholder="Message for Me" style={{height:"10rem"}}></textarea></label>
                            </div>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>                                 
                    </div>
                    <div className="right-contact">
                        
                    </div>
                </section>
                
            </div>
        </main> 
    )
}

export default Contact
