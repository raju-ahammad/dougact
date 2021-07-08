import React from 'react'
import './sideMenu.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sideMenu">
            <h2><Link to="/dashboard">Dashboard</Link></h2>
            <h2><Link to="/dashboard/blogpost">Blogpost</Link></h2>
            <h2><Link to="/dashboard/workpost">Workpost</Link></h2>
            <h2><Link to="/login">Login</Link></h2>
            <h2><Link to="/signup">SignUp</Link></h2>
        </div>
    )
}

export default SideBar
