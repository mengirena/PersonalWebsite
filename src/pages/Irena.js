import React, {useEffect} from "react"
import "./Irena.css"

function Irena(){
    function moveGrid(){
        document.querySelector(".frame1").style.top = "40vh"
        document.querySelector(".frame1").style.height = "6rem"
        document.querySelector(".frame2").style.left = "110vw"
        document.querySelector(".Irena").style.width = "251px"
        document.querySelector(".Irena").style.height = "6rem"
        document.querySelector(".Irena").style.top = "40vh"
        document.querySelector(".Irena").style.left = `${(window.innerWidth-251)/2}px`
        console.log(typeof(window.innerWidth))
        document.querySelector(".Irena").style["line-height"] = "6rem"

        const irWidth = document.querySelector(".letter-group-IR").getBoundingClientRect().width

        document.querySelector(".letter-group-EN").style.left = `${irWidth}px`
        document.querySelector(".letter-group-EN").style.top = "0%"
        document.querySelector(".letter-group-EN").style["letter-spacing"] = "8px"
        const enWidth = document.querySelector(".letter-group-EN").getBoundingClientRect().width

        document.querySelector(".letter-group-A").style["letter-spacing"] = "8px"
        document.querySelector(".letter-group-A").style.left = `${irWidth + enWidth - 27}px`
        document.querySelector(".letter-group-A").style.top = "0%"
        const aWidth = document.querySelector(".letter-group-A").getBoundingClientRect().width

        document.querySelector(".letter-group-C").style.left = `${irWidth + enWidth + aWidth -36 + 12}px`
        document.querySelector(".letter-group-C").style.top = "0%"
    }

    useEffect(()=> setTimeout(moveGrid, 500)
    ,[]);

    return(
        <main>
            <div className="Irena"> 
                <span className="letter-group-IR">IR</span> 
                <span className="letter-group-EN">EN</span>
                <span className="letter-group-A">A</span>
                <span className="letter-group-C">C</span>
            </div>
            <div className="frame1"></div>
            <div className="frame2"></div>
        </main>
    )
}

export default Irena