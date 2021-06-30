import React from 'react'
import { Link } from 'react-router-dom';
import "./MobileMenu.css"
const MobileMenu = () => {
    return (
        <div className="MobileMenu"> 
            <h2><Link onClick={()=>{window.location.href = '/'}} to="/">HOME</Link></h2>
            <h2><Link onClick={()=>{window.location.href = '/work'}} to="/work">WORK</Link></h2>
            <h2><Link onClick={()=>{window.location.href = '/blog'}} to="/blog">BLOG</Link></h2>
            <h2><Link onClick={()=>{window.location.href = '/company'}} to="/company">COMPANY</Link></h2>

        </div>
    )
}

export default MobileMenu
