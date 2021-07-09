import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import "./MobileMenu.css"
const MobileMenu = () => {
    const { closeBtnHandle, token } = useContext(MyContext)
    return (
        <div className="MobileMenu"> 
            <h2><Link onClick={closeBtnHandle} to="/">HOME</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/work">WORK</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/blog">BLOG</Link></h2>
            <h2><Link onClick={closeBtnHandle} to="/company">COMPANY</Link></h2>
            {
                token ? <h2><Link onClick={closeBtnHandle} to="/company">Dashboard</Link></h2>: <div></div>
            }
            

        </div>
    )
}

export default MobileMenu
