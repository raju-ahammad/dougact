import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/LogoBlack.png'

const Logo = () => {
    return (
        <div className="main__logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo
