import './header.css'
import { useState } from "react";
import hocEmblem from "./hocEmblem.svg"
import hamburger from "./hamburger.svg"

function Header() {
    const username = "aedelfrid"

    let loggedIn = true
    
    return (
        <>
         <div className="header">
            <div className="header-emblem-wrapper">
                <img className="header-emblem" src={hocEmblem}></img>
            </div>

            <div className="header-content">
                <p className='header-content-title'>Canadian Model House of Commons</p>
                {loggedIn && <p className='header-content-welcome'>Welcome, {username}.</p>}
            </div>
            
            <div className="header-hamburger-wrapper">
                <img className="header-hamburger" src={hamburger}></img>
            </div>
         </div>
        </>
    )
}

export default Header