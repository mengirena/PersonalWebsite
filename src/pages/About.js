import React from "react"
import './About.css'
import { Link } from 'react-router-dom'


function About(){
    return(
        <>
        <Link to="/"><i className="fas fa-moon logo"></i></Link>
        <main>
            <div className="container">
                <div className="avatar"></div>
                <h1 className="name">Irena C</h1>
                <h2 className="role">Full Stack Web Developer</h2>
                <p className="paragraph1">I’m a full stack web developer devoting in helping small businesses to create the digital presence of their product/service and optimize work efficiency.</p>
                <p className="paragraph2">I also specialized in business workflow optimization. By automating business workflow, your company operational efficiency can be improved by 50% in average. </p>
                <p className="paragraph3">Connect with me to chat about it in details!</p>
            </div>
        </main>
        </>
    )
}

export default About