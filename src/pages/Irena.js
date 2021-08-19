import React, {useState, useEffect} from "react"
import "./Irena.css"

function Irena(){
    function moveGrid(){
        const frameOne = document.querySelector(".frame1")
        const frameTwo = document.querySelector(".frame2")
        const irena = document.querySelector(".Irena")
        frameOne.style.top = "40vh"
        frameOne.style.height = "6rem"
        frameTwo.style.left = "110vw"
        frameTwo.style.opacity = "0"
        irena.style.width = "251px"
        irena.style.height = "6rem"
        irena.style.top = "40vh"
        irena.style.left = `${(window.innerWidth-251)/2}px`
        irena.style["line-height"] = "6rem"
    }

    function moveLetters() {
        const letterGroupEN = document.querySelector(".letter-group-EN")
        const letterGroupA = document.querySelector(".letter-group-A")
        const letterGroupC = document.querySelector(".letter-group-C")
        const irWidth = document.querySelector(".letter-group-IR").getBoundingClientRect().width
        const enWidth = 89
        const aWidth = 46
        letterGroupEN.style.left = `${irWidth}px`
        letterGroupEN.style.top = "0%"
        letterGroupEN.style["letter-spacing"] = "8px"
        letterGroupA.style.left = `${irWidth + enWidth}px`
        letterGroupA.style.top = "0%"
        letterGroupA.style["letter-spacing"] = "8px"
        letterGroupC.style.left = `${irWidth + enWidth + aWidth + 12}px`
        letterGroupC.style.top = "0%"
    }


    const [dimensions, setDimensions] = useState({width:window.innerWidth,height:window.innerHeight})

    useEffect(()=>{
        window.addEventListener("resize", () => setDimensions({width:window.innerWidth,height:window.innerHeight}))
    },[])

    useEffect(()=> {
        const setId = setTimeout(moveGrid, 100)
        const setIdLetter = setTimeout(moveLetters,500)
        return () => {
            clearTimeout(setId)
            clearTimeout(setIdLetter)
        }
    }
    ,[dimensions]);

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