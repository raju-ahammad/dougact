import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import "./MobileMenu.css"
const MobileMenu = () => {
    const { closeBtnHandle } = useContext(MyContext)
    return (
        <div className="MobileMenu"> 
            <h2><Link onClick={closeBtnHandle} to="/">HOME</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/work">WORK</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/blog">BLOG</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/company">COMPANY</Link></h2>
        </div>
    )
}

export default MobileMenu
