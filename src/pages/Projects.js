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
                            url="https://travelfunservice.netlify.app"
                            imgDir= "/images/travel-fun.png"
                            subtitle="Traveling Service Landing page"
                            content=""
                        />
                        <Card 
                            url="https://mountainrecreation.netlify.app"
                            imgDir= "/images/mountain-recreation.png"
                            subtitle="Mountain recreation Landing page"
                            content=""
                        />
                        <Card 
                            url="https://sneaker-sales.netlify.app"
                            imgDir= "/images/sneaker-landing.png"
                            subtitle="Sneaker Sales Landing page"
                            content=""
                        />
                        
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Projects