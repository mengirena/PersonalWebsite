import React from 'react'
import './Project.css'
import './Contact.css'
import { Link } from 'react-router-dom'


function Contact() {
    return (
        <>
        <Link to="/"><i className="fas fa-moon logo"></i></Link>
        <main>
            <div className="container-project">
                <h1 className="name">Get in Touch</h1>
                <section className="contact-form">
                    <div className="left-form">
                        <h3 className="role">Drop me a line</h3>
                        <form name="contact personal" method="post" data-netlify="true" onSubmit="submit">
                            <input type="hidden" name="form-name" value="contact personal" />
                            <div className="form-fill">
                                <label htmKlFor="name">
                                <input type="text" name="name" placeholder="Your Name"/></label>
                                <label htmlFor="email">
                                <input type="email" name="email" placeholder="Your Email"/></label>
                                <label htmlFor="message">
                                <textarea name="message" placeholder="Message for Me" style={{height:"10rem",border:"2px solid var(--clr-egg)"}} onfocus="this.placeholder = ''"></textarea></label>
                            </div>
                            <p className="button">
                                <button type="submit">Send</button>
                            </p>
                        </form>                                 
                    </div>

                    <div className="right-contact">
                        <h3 className="role contact-role">Connect with me</h3>
                        <div className='social-media-wrap'>
                            <div className='social-icons'>
                                <a
                                className='social-icon-link twitter'
                                href='https://twitter.com/IrenaChen9'
                                target='_blank'
                                rel="noreferrer"
                                >
                                <i class='fab fa-twitter' />
                                </a>
                                <a
                                className='social-icon-link github'
                                href='https://github.com/mengirena'
                                target='_blank'
                                rel="noreferrer"
                                >
                                <i class="fab fa-github"></i>
                                </a>
                            </div>
                            <div class='footer-logo'>
                                <Link to='/' className='social-logo'>Irena 
                                <i className="fas fa-moon"></i>
                                </Link>
                            </div>
                            <small className='website-rights'>IC © 2021</small>
                        </div>
                    </div>
                </section>
                
            </div>
        </main> 
        </>
    )
}

export default Contact
