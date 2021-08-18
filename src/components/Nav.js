import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    return (
        <div className="navbar">
            <div className="icon-wrapper">
                <Link to='/about' className="icon">
                    👋
                </Link>
                <Link to='/projects' className="icon">
                    🗂
                </Link>
                <Link to='/contact' className="icon">
                    📭
                </Link>
            </div>

        </div>
    )
}

export default Nav
