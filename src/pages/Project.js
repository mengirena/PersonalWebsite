import Card from "../components/Card"
import { Link } from 'react-router-dom'
import './Project.css'

function Projects(){
    return(
        <>
        <Link to="/"><i className="fas fa-moon logo"></i></Link>
        <main>
            <div className="container-project">
                <h1 className="name">Projects I've done</h1>
                <div className="cards-wrapper">
                    <ul className="cards">
                        <Card 
                            url="https://travelfunservice.netlify.app"
                            imgDir= "https://res.cloudinary.com/dlw84bbw6/image/upload/v1630528279/Personal%20Website/travel-fun_shhame.png"
                            subtitle="Traveling Service Landing page"
                            content=""
                        />
                        <Card 
                            url="https://mountainrecreation.netlify.app"
                            imgDir= "https://res.cloudinary.com/dlw84bbw6/image/upload/v1630528277/Personal%20Website/mountain-recreation_ldqprn.png"
                            subtitle="Mountain recreation Landing page"
                            content=""
                        />
                        <Card 
                            url="https://sneaker-sales.netlify.app"
                            imgDir= "https://res.cloudinary.com/dlw84bbw6/image/upload/v1630528279/Personal%20Website/sneaker-landing_bufp1y.png"
                            subtitle="Sneaker Sales Landing page"
                            content=""
                        />
                    
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}

export default Projects