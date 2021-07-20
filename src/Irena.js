import React, {useEffect} from "react"
import "./irena.css"

function Irena(){
    function moveGrid(){
        document.querySelector(".frame1").style.top = "40vh"
        document.querySelector(".frame1").style.height = "6rem"
        document.querySelector(".frame2").style.left = "110vw"
        document.querySelector(".Irena").style.width = "250px"
        document.querySelector(".Irena").style.height = "6rem"
        document.querySelector(".Irena").style.top = "40vh"
        document.querySelector(".Irena").style.left = "43vw"
        document.querySelector(".Irena").style["line-height"] = "6rem"
        // document.querySelector(".letter-group-EN").style.left = document.querySelector(".letter-group-IR").clientWidth
        document.querySelector(".letter-group-EN").style.top = "0%"
        document.querySelector(".letter-group-EN").style["letter-spacing"] = "8px"
        document.querySelector(".letter-group-A").style["letter-spacing"] = "8px"
        document.querySelector(".letter-group-A").style.top = "0%"
        document.querySelector(".letter-group-C").style.top = "0%"
        // document.querySelectorAll("span").forEach(ele => ele.style.position = "relative")
    }

    // useEffect(()=> setTimeout(moveGrid, 500)
    // ,[]);

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