import React from "react"
import Card from "../components/Card"
import './Project.css'

function Projects(){
    return(
        <main>
            <div className="container-project">
                <h1 className="name">Businesses I've helped</h1>
                <div className="cards-wrapper">
                    <ul className="cards">
                        <Card 
                            url="https://sneaker-sales.netlify.app"
                            imgDir= "/images/sneaker-landing.png"
                            subtitle="Sneaker Sales Landing page"
                            content=""
                        />
                        <Card />
                        <Card />
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Projects