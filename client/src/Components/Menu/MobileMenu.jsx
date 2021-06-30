import React from 'react'
import { Link } from 'react-router-dom';
import "./MobileMenu.css"
const MobileMenu = () => {
    return (
        <div className="MobileMenu"> 
            <h2><Link to="/">HOME</Link></h2>
            <h2><Link to="/work">WORK</Link></h2>
            <h2><Link to="/blog">BLOG</Link></h2>
            <h2><Link to="/company">COMPANY</Link></h2>

        </div>
    )
}

export default MobileMenu
